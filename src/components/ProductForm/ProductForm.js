import React, {useState} from 'react';
import {Card, Form, Button, Alert} from 'bootstrap-4-react';
import {database, storage} from '../../firebaseConfig';

import './ProductForm.css';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';

function ProductForm({isDefaultForm, selectedProduct}) {
  const [isUploadData, setIsUploadData] = useState(false);
  const {register, handleSubmit, errors, watch} = useForm();
  const isDiscount = watch('discount', true);

  async function onSubmit(formData) {
    const convertedFormData = formDataConvert(formData);

    setIsUploadData(true);
    try {
      let productsRef = '';
      if (selectedProduct) {
        productsRef = await database.ref(`Products/${selectedProduct.productId}`);
      } else {
        productsRef = await database.ref('Products');
      }

      await putFileToStorage(convertedFormData.file);
      const fileUrl = await getImageUrlFromStorage(convertedFormData.file);
      convertedFormData.file = fileUrl;
      if (selectedProduct) {
        productsRef.set(convertedFormData);
      } else {
        productsRef.push(convertedFormData);
      }
    } catch {
      console.log('Data is not uloaded');
    }
    setIsUploadData(false);
  }

  function formDataConvert(data) {
    const newData = data;
    newData.file = data.file[0];
    if (data.date) {
      const oneDayMs = 86400000;
      const dateInMs = Date.parse(data.date);
      newData.date = dateInMs + oneDayMs;
    }

    return newData;
  }

  async function putFileToStorage(file) {
    return storage.ref(`products/${file.name}`).put(file);
  }

  async function getImageUrlFromStorage(file) {
    return storage.ref('products').child(file.name).getDownloadURL();
  }

  function DateToday() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month > 10 ? month : `0${month}`;
    day = day > 10 ? day : `0${day}`;

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="ProductForm">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <label htmlFor="title">Заголовок*</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Введите заголовок"
                className="form-control"
                defaultValue={selectedProduct && selectedProduct.title}
                ref={register({
                  required: 'Заголовок пуст.',
                  minLength: {value: 20, message: 'Введено менее 20-ти симоволов.'},
                  maxLength: {value: 60, message: 'Введено более 60-ти симоволов.'}
                })}
              />
              {errors.title && (
                <Alert className="alert" danger>
                  {errors.title.message}
                </Alert>
              )}
            </Form.Group>
            <Form.Group>
              <label htmlFor="file">Фото*</label>
              <input
                type="file"
                name="file"
                id="file"
                className="input-block"
                ref={register({required: 'Фото не загружено.'})}
              />
              {errors.file && (
                <Alert className="alert" danger>
                  {errors.file.message}
                </Alert>
              )}
            </Form.Group>
            <Form.Group>
              <label htmlFor="description">Описание товара</label>
              <textarea
                type="text"
                id="description"
                name="description"
                defaultValue={selectedProduct && selectedProduct.description}
                rows="3"
                className="form-control"
                ref={register({maxLength: {value: 200, message: 'Максимальное кол-во символов - 200'}})}
              />
              {errors.description && (
                <Alert className="alert" danger>
                  {errors.description.message}
                </Alert>
              )}
            </Form.Group>
            <Form.Group>
              <label htmlFor="price">Цена*</label>
              <input
                type="text"
                name="price"
                id="price"
                defaultValue={selectedProduct && selectedProduct.price}
                className="form-control"
                placeholder="99999999.99$"
                ref={register({
                  required: 'Цена не введена.',
                  max: {
                    value: 99999999.9,
                    message: 'Максимальное значение 99999999.9'
                  } /* pattern: /^\d{1,8}[.]?\d{1,2}$/ */
                })}
              />
              {errors.price && (
                <Alert className="alert" danger>
                  {errors.price.message}
                </Alert>
              )}
            </Form.Group>
            <Form.Group>
              <label htmlFor="discount">Процент скидки</label>
              <input
                type="text"
                className="form-control"
                placeholder="10-90%"
                id="discount"
                defaultValue={selectedProduct && selectedProduct.discount}
                name="discount"
                ref={register({
                  min: {value: 10, message: 'Минимальное значение 10.'},
                  max: {value: 90, message: 'Максимальное значение 90.'}
                })}
              />
              {errors.discount && (
                <Alert className="alert" danger>
                  {errors.discount.message}
                </Alert>
              )}
            </Form.Group>
            {isDiscount && (
              <Form.Group>
                <label htmlFor="discount-end-date">Дата окончания скидки*</label>
                <input
                  type="date"
                  id="discount-end-date"
                  className="input-block"
                  name="date"
                  min={DateToday()}
                  defaultValue={DateToday()}
                  ref={register({required: true})}
                />
              </Form.Group>
            )}
            <Button primary type="submit" disabled={isUploadData}>
              {isDefaultForm ? 'Добавить' : 'Изменить'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {idSelectedProduct, productsList} = state.products;
  return {
    idSelectedProduct: idSelectedProduct,
    selectedProduct: productsList.find((product) => product.productId === idSelectedProduct)
  };
};

export default connect(mapStateToProps)(ProductForm);
