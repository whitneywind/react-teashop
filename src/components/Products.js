import { productData } from "../productData"
import ProductCard from "./ProductCard"

const Products = () => {
    return (
        <div className="card-container col col-lg-10 offset-lg-1 d-flex flex-wrap space-between">
            <div className="card-container col col-lg-10 offset-lg-1 d-flex flex-wrap space-between">
                {productData.map((data, index) => (
                    <ProductCard key={index} {...data} />
                ))}
            </div>
        </div>
    )
}

export default Products;