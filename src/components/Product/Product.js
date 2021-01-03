import React from 'react';
import {Card, Button} from 'bootstrap-4-react';
import './Product.css';

export default function Product({productId, title, price, description, file, date, discount}) {
  const isDiscountValid = date > Date.now();

  function getDiscountDaysLeft() {
    const oneHour = 3600000;
    const hoursLeft = Math.floor((date - Date.now()) / oneHour);
    const daysLeft = Math.floor(hoursLeft / 24);
    return `До конца акции ${daysLeft} ${pluralType(daysLeft)}`;
  }

  function pluralType(value) {
    const dayOne = 'день';
    const dayTwo = 'дня';
    const dayThree = 'дней';
    value = Math.abs(value);
    value %= 100;
    if (value >= 5 && value <= 20) {
      return dayThree;
    }
    value %= 10;
    if (value === 1) {
      return dayOne;
    }
    if (value >= 2 && value <= 4) {
      return dayTwo;
    }
    return dayThree;
  }

  return (
    <div className="Product">
      <Card>
        <Card.Image src={file} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="product__price">
          {isDiscountValid && (
            <>
              <div className="discount-days">{getDiscountDaysLeft()}</div>
              <div className="discount-persent">{discount}% скидка</div>
              <span className="discount-price">{price - (price * discount) / 100} грн.</span>
            </>
          )}
          <span className={`current-price ${isDiscountValid && 'discount-active'}`}>{price} грн.</span>
        </div>
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
