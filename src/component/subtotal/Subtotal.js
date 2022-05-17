import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
// import { getBasketTotal } from '../../redux/addToBasket/AddToBasketSlice';
function Subtotal() {
  const [vlaueTotal, setValueTotal] = useState(0);
  const basket = useSelector((state) => state.basket);
  const total = () => {
    setValueTotal(basket?.reduce((amount, item) => item.price + amount, 0));
  };

  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>${vlaueTotal}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        prefix={'$'}
        decimalScale={2}
        value={total}
        displayType={'text'}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
