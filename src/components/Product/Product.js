import React from 'react';
import {Card, Button} from 'bootstrap-4-react';
import './Product.css';

export default function Product({productId, title, price, description, file, date, discount}) {
  const isDiscountValid = date > Date.now();

  function getDiscountDaysLeft() {
    const oneHour = 3600000;
    const hoursLeft = Math.floor((date - Date.now()) / oneHour);
    const daysLeft = Math.floor(hoursLeft / 24);
    if (!daysLeft) {
      return `До конца акции ${hoursLeft} ${pluralType(hoursLeft, 'час', 'часа', 'часов')}`;
    }
    return `До конца акции ${daysLeft} ${pluralType(daysLeft, 'день', 'дня', 'дней')}`;
  }

  function pluralType(value, oneType, twoType, threeType) {
    value = Math.abs(value);
    value %= 100;
    if (value >= 5 && value <= 20) {
      return threeType;
    }
    value %= 10;
    if (value === 1) {
      return oneType;
    }
    if (value >= 2 && value <= 4) {
      return twoType;
    }
    return threeType;
  }

  function getDiscountPrice() {
    return price - (price * discount) / 100;
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
              <span className="discount-price">{getDiscountPrice()} грн.</span>
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
