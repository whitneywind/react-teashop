import MatchaImg from '../images/IMG_1007.jpg';
import SenchaImg from '../images/IMG_6762.jpg';
import HojichaImg from '../images/IMG_6345.jpg';
import GyokuroImg from '../images/IMG_1910.jpg';

const HomepageMenuKor = () => {
    return (
        <>
        <div className="row row-content">
        <div className="col col-lg-10 offset-lg-1 d-flex my-md-4">
            <h3 id="tea-products" className="mt-5 pt-3">차 정보</h3>
        </div>
    </div>
    <div className="row row-content">
        <div className="card-container col col-lg-10 offset-lg-1 d-flex flex-wrap">
                <div className="card" id="matcha">
                    <img src={MatchaImg} className="card-img-top" alt="..." />
                    <div className="card-title">말차</div>
                    <div className="card-body">
                        <p>프리미엄 수확된 찻입으로부터 특급 세레모니얼급 말차. 색부터 뛰어난 저희 말차는 </p>
                    </div>
                </div>
                <div className="card" id="sencha">
                    <img src={SenchaImg} className="card-img-top" alt="..." />
                    <div className="card-title">센차</div>
                    <div className="card-body">
                        <p>새로 난 찻잎을 곧 쪄서 비벼 만든 센차는 전통적이며 세상 널리 알려진 상품일수록 맛과 향이 좋음.</p>
                    </div>
                </div>
                <div className="card" id="hojicha">
                    <img src={HojichaImg} className="card-img-top" alt="..." />
                    <div className="card-title">호지차</div>
                    <div className="card-body">
                        <p>호지차는 볶은 녹차인데, 한번만 마시면 잊을 수 없는 맛이다. 이 색다른 차는 다른 차 종류와 비교할 수 없을 정도로 특이학고 인상스럽다.</p>
                    </div>
                </div>
                <div className="card" id="gyokuro">
                    <img src={GyokuroImg} className="card-img-top" alt="..." />
                    <div className="card-title">교쿠로</div>
                    <div className="card-body">
                        <p>교쿠로는 햇빛을 차단함으로써 쓰고 떫은 맛이 없고 단맛이 응축되어 있기에 일상생활에서 언제든 즐기기에 딱 맞는 그런 차라고 한다.  </p>
                    </div>
                </div>
        </div>
    </div>
</>
    )
}

export default HomepageMenuKor;