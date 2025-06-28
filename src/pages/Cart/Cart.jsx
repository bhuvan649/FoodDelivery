import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getCartTotalAmount,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  const deliveryFee = 20;
  const subtotal = getCartTotalAmount();
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <br />
        {food_list.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item.id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${subtotal===0?0:20}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
