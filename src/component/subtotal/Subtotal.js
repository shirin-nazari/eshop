import React from 'react';
import NumberFormat from 'react-number-format';
function Subtotal() {
  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({basket.length} items): <strong>${value}</strong> */}
              subtotal
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        prefix={'$'}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={'ffff'}
        displayType={'text'}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
