import React, {useState} from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';
import {database, storage} from '../../firebaseConfig';

import './ProductForm.css';
import {useForm} from 'react-hook-form';

export default function ProductForm() {
  const [discount, setDiscount] = useState('');
  const [isUploadData, setIsUploadData] = useState(false);
  const {register, handleSubmit, errors} = useForm();

  async function onSubmit(formData) {
    const convertedFormData = formDataConvert(formData);

    setIsUploadData(true);
    try {
      const productsRef = await database.ref('Products');
      await putFileToStorage(convertedFormData.file);
      const fileUrl = await getImageUrlFromStorage(convertedFormData.file);
      convertedFormData.file = fileUrl;
      productsRef.push(convertedFormData);
    } catch {
      console.log('Data is not uloaded');
    }
    setIsUploadData(false);
  }

  function formDataConvert(data) {
    const newData = data;
    newData.file = data.file[0];
    const oneDayMs = 86400000;
    const dateInMs = Date.parse(data.date);
    newData.date = dateInMs + oneDayMs;
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
                ref={register({required: true, minLength: 20, maxLength: 60})}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="file">Фото*</label>
              <input type="file" name="file" id="file" className="input-block" ref={register({required: true})} />
            </Form.Group>
            <Form.Group>
              <label htmlFor="description">Описание товара</label>
              <textarea
                type="text"
                id="description"
                name="description"
                rows="3"
                className="form-control"
                ref={register({maxLength: 200})}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="price">Цена*</label>
              <input
                type="text"
                name="price"
                id="price"
                className="form-control"
                placeholder="99999999.99$"
                ref={register({
                  required: true,
                  max: 99999999.99 /* pattern: /^\d{1,8}[.]?\d{1,2}$/ */
                })}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="discount">Процент скидки</label>
              <input
                type="text"
                name="discount"
                className="form-control"
                placeholder="10-90%"
                id="discount"
                ref={register({min: 10, max: 90})}
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
            {discount && (
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
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
