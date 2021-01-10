import React, {useState} from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';
import './ProductForm.css';
import {Controller, useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {getRef} from '../../utils/database';
import {PATH_PRODUCTS} from '../../utils/constants';
import {getImageUrlFromStorage, putFileToStorage} from '../../utils/storage';
import {formDataConvert, getDateToday} from '../../utils/utils';
import Error from '../Error/Error';
import {useHistory} from 'react-router-dom';

function ProductForm({isDefaultForm, selectedProduct}) {
  const [isUploadData, setIsUploadData] = useState(false);
  const [isFileValid, setIsFileValid] = useState(false);
  const {register, handleSubmit, errors, watch, control} = useForm();
  const isDiscount = watch('discount', selectedProduct && selectedProduct.discount ? true : false);
  const isFile = watch('file', false);
  const history = useHistory();

  async function onSubmit(formData) {
    if (!isFileValid) {
      return;
    }
    setIsUploadData(true);
    const convertedData = formDataConvert(formData);
    const productsRef = getProductsRef();
    try {
      convertedData.file = await getFileUrl(convertedData.file);
      putDataToDB(productsRef, convertedData);
      history.push(`/${PATH_PRODUCTS}`);
    } catch {
      console.error('Data is not uloaded');
    }
    setIsUploadData(false);
  }

  async function getFileUrl(file) {
    let fileUrl = '';
    try {
      fileUrl = await getImageUrlFromStorage(file);
    } catch {
      await putFileToStorage(file);
      fileUrl = await getImageUrlFromStorage(file);
    }
    return fileUrl;
  }

  function photoValidation(file) {
    setIsUploadData(true);
    const reader = new FileReader();
    const img = new Image();

    reader.onloadend = () => {
      img.onload = () => {
        const minFileSize = 200;
        const maxFileSize = 4000;
        const isFileSizeInvalid =
          img.width < minFileSize || img.height < minFileSize || img.width > maxFileSize || img.height > maxFileSize;
        if (isFileSizeInvalid) {
          setIsFileValid(false);
        } else {
          setIsFileValid(true);
        }

        setIsUploadData(false);
      };

      img.onerror = () => setIsFileValid(false);
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  }

  function getProductsRef() {
    let productsPath = '';
    if (selectedProduct) {
      productsPath = `${PATH_PRODUCTS}/${selectedProduct.productId}`;
    } else {
      productsPath = PATH_PRODUCTS;
    }
    return getRef(productsPath);
  }

  function putDataToDB(ref, data) {
    if (selectedProduct) {
      ref.set(data);
    } else {
      ref.push(data);
    }
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
              <Error error={errors.title} />
            </Form.Group>
            <Form.Group>
              <label htmlFor="file">Фото*</label>
              <Controller
                control={control}
                name="file"
                rules={{required: 'Фото не загружено.'}}
                render={({onChange}) => (
                  <input
                    type="file"
                    id="file"
                    className="input-block"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const files = e.target.files;
                      onChange(files);
                      photoValidation(file);
                    }}
                  />
                )}
              />
              <Error error={errors.file} />
              {isFile && !isFileValid && <Error error={{message: 'Картинка неправильного размера.'}} />}
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
              <Error error={errors.description} />
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
                  maxLength: {value: '11', message: 'Неверно введена цена.'},
                  pattern: {value: /^(\d{1,8}|\d{1,8}\.{1}\d{1,2})$/, message: 'Неверно введена цена.'}
                })}
              />
              <Error error={errors.price} />
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
                  max: {value: 90, message: 'Максимальное значение 90.'},
                  maxLength: {value: 2, message: 'Слишком длинное значение.'},
                  pattern: {value: /^\d{1,2}$/, message: 'Вводить можно только числа.'}
                })}
              />
              <Error error={errors.discount} />
            </Form.Group>
            {isDiscount && (
              <Form.Group>
                <label htmlFor="discount-end-date">Дата окончания скидки*</label>
                <input
                  type="date"
                  id="discount-end-date"
                  className="input-block"
                  name="date"
                  min={getDateToday()}
                  defaultValue={getDateToday()}
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
