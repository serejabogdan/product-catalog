import React from 'react';
import {Card, Button} from 'bootstrap-4-react';
import './Product.css';

export default function Product({title, price, description, file, date, discount}) {
  return (
    <div className="Product">
      <Card>
        <Card.Image src={file} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="delete-button" primary>
            Удалить
          </Button>
          <Button primary>Изменить</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
