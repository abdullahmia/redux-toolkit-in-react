import { useDispatch } from 'react-redux';
import { add } from "../../../redux/slices/cartSlices";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(product));
  }
  return (
    <div className="card p-4 border-0 shadow">
      <img
        src={product?.image}
        className="w-100 product_img"
        alt=""
      />
      <h4>Product Name</h4>
      <h5>Product Price</h5>
      <button onClick={() => addToCart(product)} className="btn bg-dark text-light btn-sm">Add to cart</button>
    </div>
  );
};

export default Product;