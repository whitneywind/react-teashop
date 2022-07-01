import { Link, Outlet } from 'react-router-dom';
import logo from "./images/IMG_7844.jpg"; 

const Layout = () => {
   
    // // toggle button text on mouseover
    // const langBtn = document.querySelector('#lang-btn');
    // langBtn.addEventListener('mouseover', textToggle);
    // langBtn.addEventListener('mouseout', textToggle)

    // function textToggle() {
    //     langBtn.innerText === 'lang (eng)' ? langBtn.innerText = '한국어로' : langBtn.innerText = 'lang (eng)';
    // }


    return (
    <div className="body-container">
        <header>
            <div>
                <nav>
                    <div id="logo-container">
                        <a href="#">
                            <img id="logo" src={ logo } alt="logo" />
                        </a>
                     </div>
                    <a href="/">
                        <h1 id="cafe-title">Tea Collective</h1>
                    </a>
                    <div id="navigation-container">
                        <p>general</p>
                        <ul id="nav-list-1">
                            <Link to='/'>home</Link>
                            <Link to='/directions'>directions</Link>
                            <Link to='/'>menu</Link>
                        </ul>
                        <p>tea info</p>
                        <ul id="nav-list-2">
                            <li><a href="/#matcha">matcha</a></li>
                            <li><a href="/#sencha">sencha</a></li>
                            <li><a href="/#hojicha">hojicha</a></li>
                            <li><a href="/#gyokuro">gyokuro</a></li>
                        </ul>
                    </div>
                 </nav>
            </div>
        </header>
        <div className="container">
            <div className="row row-content">
                <div id="top-title" className="d-xs-flex d-sm-none mt-2 col col-lg-10 offset-lg-1">
                    <h1>Tea Collective</h1>
                    <ul id="xs-nav-list">
                            <Link to='/'>home</Link>
                            <Link to='/directions'>directions</Link>
                            <Link to='/'>menu</Link>
                        </ul>
                </div>
                <div className="d-xs-none d-md-block mt-2 col col-lg-10 offset-lg-1">
                    <div className="d-flex flex-row justify-content-end">
                      <p>
                        <Link 
                            to='/kr'
                            id="lang-btn" 
                            className="btn" 
                            type="button" 
                            data-bs-toggle="tooltip" 
                            lang="ko" 
                            data-bs-placement="bottom" 
                            title="언어 바꾸기">
                                lang (eng)
                        </Link>
                      </p>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    </div>
    )
  }

  export default Layout;