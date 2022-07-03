import useProducts from "./ProductContext";
import ProductCard from "./ProductCard";
import CartProductCard from "./CartProductCard";

const Cart = () => {
    const { products, total } = useProducts();
     return (
        <div className="mt-5">
            {products.map((product, index) => (
                <CartProductCard {...product} key={index} />
            ))}
            <h3 className="w-50 mx-auto">Your cart total is: {total}</h3>
        </div>
     )
}

export default Cart;