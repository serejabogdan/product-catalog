import React from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';

export default function AddingProductForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    getDataForm(form);
  }

  function getDataForm(form) {
    const values = {};
    for (const field of form) {
      const {name} = field;

      if (name) {
        const {type, value} = field;

        if (type === 'file') {
          values[name] = field.files[0];
        } else if (type === 'date') {
          const dateInMs = Date.parse(value);
          values[name] = dateInMs;
        } else {
          values[name] = value;
        }
      }
    }
    return values;
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
    <div className="wrapper">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <label htmlFor="title">Заголовок*</label>
              <Form.Input type="text" name="title" id="title" placeholder="Введите заголовок" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="file">Фото*</label>
              <Form.CustomFile id="file" name="file">
                Выберите фото
              </Form.CustomFile>
            </Form.Group>
            <Form.Group>
              <label htmlFor="description">Описание товара</label>
              <Form.Textarea id="description" name="description" rows="3"></Form.Textarea>
            </Form.Group>
            <Form.Group>
              <label htmlFor="price">Цена*</label>
              <Form.Input type="text" id="price" name="price" placeholder="99999999.99$" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="discount">Процент скидки</label>
              <Form.Input type="text" id="discount" name="discount" placeholder="10-90%" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="discount-end-date">Дата окончания скидки</label>
              <div className="date">
                <input type="date" id="discount-end-date" name="date" min={DateToday()} defaultValue={DateToday()} />
              </div>
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
