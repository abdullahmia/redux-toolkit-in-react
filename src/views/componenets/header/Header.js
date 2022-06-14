import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{background: "white"}}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Redux Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link">Cart: {cart?.length}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header