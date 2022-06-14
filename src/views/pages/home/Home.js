import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../redux/slices/productSlice';
import Products from '../../componenets/products/Products';

const Home = () => {
  const {products, status} = useSelector((state) => state.product);
  const dispatch = useDispatch();   
  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <div className="bg-light py-5 mt-5">
      <div className="container">
        {status === "loading" ? "Loading... " : <Products products={products} />}
      </div>
    </div>
  );
}

export default Home;