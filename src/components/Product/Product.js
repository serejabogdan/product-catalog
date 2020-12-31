import React from 'react';
import {Card, Button} from 'bootstrap-4-react';
import './Product.css';

export default function Product() {
  const ingUrl = 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg';

  return (
    <Card className="product-card">
      <Card.Image src={ingUrl} />
      <Card.Body>
        <Card.Title>Карбонара</Card.Title>
        <Card.Text>Сырный соус, сыр дорблю, моцарелла, чедр, пармезан, итальянские травы.</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="delete-button" primary>
          Удалить
        </Button>
        <Button primary>Изменить</Button>
      </Card.Footer>
    </Card>
  );
}
