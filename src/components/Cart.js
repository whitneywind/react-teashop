import useProducts from "./ProductContext";
import CartProductCard from "./CartProductCard";

const Cart = () => {
    const { products, total } = useProducts();
     return (
        <main>
            <div className="container w-75 bg-light">
                <div className="my-5 d-flex align-items-start flex-column align-items-end w-100">
                    {products.map((product, index) => (
                            <CartProductCard {...product} key={index} />
                    ))}
                    <h3 className="w-50 pt-5 mx-auto">Your cart total is: {total}</h3>
                </div>
            </div>
        </main>
     )
}

export default Cart;