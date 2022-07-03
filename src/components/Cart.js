import useProducts from "./ProductContext";
import ProductCard from "./ProductCard";

const Cart = () => {
    const { products, total } = useProducts();
     return (
        <>
            <p>Your cart total is: {total}</p>
            {products.map((product, index) => (
                <ProductCard {...product} key={index} />
            ))}
        </>
     )
}

export default Cart;