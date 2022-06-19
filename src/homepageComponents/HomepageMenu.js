import MatchaImg from '../images/IMG_1007.jpg';
import SenchaImg from '../images/IMG_6762.jpg';
import HojichaImg from '../images/IMG_6345.jpg';
import GyokuroImg from '../images/IMG_1910.jpg';

const HomepageMenu = () => {
    return (
        <div>
            <div className="row row-content">
                <div className="col col-lg-10 offset-lg-1 d-flex my-md-4">
                    <h3 id="tea-products" className="mt-5 pt-3">Tea Menu</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="card-container col col-lg-10 offset-lg-1 d-flex flex-wrap space-between">
                    <div className="card" id="matcha">
                        <img src={MatchaImg} className="card-img-top" alt="..." />
                        <div className="card-title">Matcha</div>
                        <div className="card-body">
                            <p>Our ceremonial matcha is ground from premium harvest leaves. A pure, rich matcha flavor unlike any other. </p>
                        </div>
                    </div>
                    <div className="card" id="sencha">
                        <img src={SenchaImg} className="card-img-top" alt="..." />
                        <div className="card-title">Sencha</div>
                        <div className="card-body">
                            <p>Sencha brews a balance of sweetness and astringency. This classNameic tea fits any occasion.</p>
                        </div>
                    </div>
                    <div className="card" id="hojicha">
                        <img src={HojichaImg} className="card-img-top" alt="..." />
                        <div className="card-title">Hojicha</div>
                        <div className="card-body">
                            <p>Remarkably aromatic, light-bodied, and refreshing. This hojicha blend of roasted green tea leaves and stems.</p>
                        </div>
                    </div>
                    <div className="card" id="gyokuro">
                        <img src={GyokuroImg} className="card-img-top" alt="..." />
                        <div className="card-title">Gyokuro</div>
                            <div className="card-body">
                                <p>Gyokuro is a green tea with a sweet umami flavor. This tea is one for slowly sipping and savoring.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
    
    
    }
    
    export default HomepageMenu;