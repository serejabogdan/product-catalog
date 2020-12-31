import React from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';

export default function AddingProductForm() {
  return (
    <div className="wrapper">
      <Card>
        <Card.Body>
          <Form>
            <Form.Group>
              <label htmlFor="title">Заголовок*</label>
              <Form.Input type="text" id="title" placeholder="Введите заголовок" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="file">Фото*</label>
              <Form.CustomFile id="file">Выберите фото</Form.CustomFile>
            </Form.Group>
            <Form.Group>
              <label htmlFor="description">Описание товара</label>
              <Form.Textarea id="description" rows="3"></Form.Textarea>
            </Form.Group>
            <Form.Group>
              <label htmlFor="price">Цена*</label>
              <Form.Input type="text" id="price" placeholder="99999999.99$" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="discount">Процент скидки</label>
              <Form.Input type="text" id="discount" placeholder="10-90%" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="discount-end-date">Дата окончания скидки</label>
              <input type="date" id="discount-end-date" />
            </Form.Group>
            <Button primary type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
