import { useSelector } from 'react-redux';
import CartItem from "../../componenets/cartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="bg-light py-5 mt-5">
      <div className="container ">
        <div className="cart_items">
          {cartItems.map((cartItem, key) => (
            <CartItem key={key} cartItem={cartItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart