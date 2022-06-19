import { Link, Outlet } from 'react-router-dom';
import logo from "./images/IMG_7844.jpg"; 

const LayoutKor = () => {
return (
    <div className="body-container">
        <header>
            <div>
                <nav>
                    <div id="logo-container">
                        <a href="/kr">
                            <img id="logo" src={ logo } alt="logo" />
                        </a>
                    </div>
                    <a href="/kr/home">
                        <h1 id="cafe-title">티컬렉티브</h1>
                    </a>
                    <div id="navigation-container">
                        <p>사이트</p>
                        <ul id="nav-list-1">
                            <Link to='/kr'>홈</Link>
                            <Link to='/kr/directions'>길 안내</Link>
                            <Link to='/'>메뉴</Link>
                        </ul>
                        <p>차 종류</p>
                        <ul id="nav-list-2">
                            <li><a href="#matcha">말차</a></li>
                            <li><a href="#sencha">센차</a></li>
                            <li><a href="#hojicha">호지차</a></li>
                            <li><a href="#gyokuro">교쿠로</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div className="container">
            <div className="row row-content">
                <div id="top-title" className="d-xs-flex d-sm-none mt-2 col col-lg-10 offset-lg-1">
                    <h1>티컬렉티브</h1>
                    <ul id="xs-nav-list">
                        <Link to='/'>홈</Link>
                        <Link to='/kr/directions'>길 안내</Link>
                        <Link to='/'>메뉴</Link>
                    </ul>
                </div>
                <div className="d-xs-none d-md-block mt-2 col col-lg-10 offset-lg-1">
                    <div className="d-flex flex-row justify-content-end">
                        <p>
                            <Link to='/' id="lang-btn" className="btn" type="button" data-bs-toggle="tooltip" lang="ko" data-bs-placement="bottom" title="switch to English">언어 (kor)</Link>
                        </p>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    </div>
)
}

export default LayoutKor;