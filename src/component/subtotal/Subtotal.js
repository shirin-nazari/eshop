import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../button/Button';
const styles = {
  background: '#F8B400',
  padding: 5,
  borderRadius: '4px ',
  margin: 4,
};
function Subtotal() {
  const basket = useSelector((state) => state.basket);

  return (
    <div className="subtotal" style={styles}>
      <p>
        Subtotal ({basket.length} items):$
        <strong>
          {basket?.reduce((amount, item) => item.price + amount, 0)}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <Button variant="contained">Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;
