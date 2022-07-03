import CarouselComponent from "./homepageComponents/Carousel";
import About from "./homepageComponents/About";
import HomepageMenu from "./homepageComponents/HomepageMenu";
import Products from "./components/Products";

const Homepage = () => {
    return (
      <>
        <CarouselComponent />
        <About />
        <Products />
    </>
    )
}

export default Homepage;