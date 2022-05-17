import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { getBasketTotal } from '../../redux/addToBasket/AddToBasketSlice';

function Subtotal() {
  // const [valueTotal, setValueTotal] = useState(0);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  // const total = () => {
  // setValueTotal(basket?.reduce((amount, item) => item.price + amount, 0));
  // };
  console.log(basket);

  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        // onValueChange={() => {
        //   dispatch(getBasketTotal(basket));
        // }}
        prefix={'$'}
        decimalScale={2}
        value={500000}
        displayType={'text'}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
