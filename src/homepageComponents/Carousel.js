import carouselImg1 from '../images/IMG_7117.jpg';
import carouselImg2 from '../images/IMG_7120.jpg';
import carouselImg3 from '../images/img8.jpg';
import staticImg1 from '../images/IMG_7491.jpg';
import staticImg2 from '../images/IMG_1029.jpg';
import staticImg3 from '../images/IMG_7152.jpg';



const Carousel = () => {
    return (
        <>
            <div className="row row-content">
                <div className="col col-lg-10 offset-lg-1">
                    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                        <div className="carousel-inner">
                            <div id="slide1" className="carousel-item active">
                                <img className="d-block w-70 img-fluid" src={ carouselImg1 } alt="first slide" />
                            </div>
                            <div id="slide2" className="carousel-item">
                                <img className="d-block w-70 img-fluid" src={ carouselImg2 } alt="second slide" />
                            </div>
                            <div id="slide3" className="carousel-item">
                                <img className="d-block w-70 img-fluid" src={ carouselImg3 } alt="third slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="clickables col col-lg-10 offset-lg-1 d-flex my-4">
                    <a className="mr-4"><img className="img-fluid row-img" src={ staticImg1 } alt="pic1" /></a>
                    <a className="mx-2"><img className="img-fluid row-img" src={ staticImg2 } alt="pic1" /></a>
                    <a className="ml-4"><img className="img-fluid row-img" src={ staticImg3 } alt="pic1" /></a>
                </div>
            </div>
        </>
    )
}

export default Carousel;