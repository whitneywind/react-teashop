import { Link, Outlet } from "react-router-dom";
import logo from "./images/IMG_7844.jpg";
import useProducts from "./components/ProductContext";

const Layout = () => {
  const { products } = useProducts();
  const numberOfProducts = products.length;

  return (
    <div className="body-container">
      <header>
        <div>
          <nav>
            <div id="logo-container">
              <a href="#">
                <img id="logo" src={logo} alt="logo" />
              </a>
            </div>
            <a href="/">
              <h1 id="cafe-title">Tea Collective</h1>
            </a>
            <div id="navigation-container">
              <p>general</p>
              <ul id="nav-list-1">
                <Link to="/">home</Link>
                <Link to="/directions">directions</Link>
                <Link to="/reservation">reserve</Link>
              </ul>
              <p>order online</p>
              <ul id="nav-list-2">
                <li>
                  <a href="/react-teashop#matcha">matcha</a>
                </li>
                <li>
                  <a href="/react-teashop#sencha">sencha</a>
                </li>
                <li>
                  <a href="/react-teashop#hojicha">hojicha</a>
                </li>
                <li>
                  <a href="/react-teashop#gyokuro">gyokuro</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="row row-content">
          <div
            id="top-title"
            className="d-xs-flex d-sm-none mt-2 col col-lg-10 offset-lg-1"
          >
            <h1>Tea Collective</h1>
            <div className="d-flex justify-content-around">
              <Link to="/">home</Link>
              <Link to="/directions">directions</Link>
              <Link to="/reservation">reserve</Link>
            </div>
          </div>
          <div className="d-xs-none d-md-block mt-2 col col-lg-10 offset-lg-1">
            <div className="d-flex flex-row justify-content-end">
              <Link to="/cart" className="btn">
                cart (<b>{numberOfProducts}</b>)
              </Link>
              <Link
                to="/kr"
                id="lang-btn"
                className="btn"
                type="button"
                data-bs-toggle="tooltip"
                lang="ko"
                data-bs-placement="bottom"
                title="언어 바꾸기"
              >
                lang (eng)
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
