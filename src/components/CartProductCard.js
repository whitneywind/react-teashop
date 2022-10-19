import useProducts from "./ProductContext";

const CartProductCard = ({ name, id, idName, image, price }) => {
    const { removeFromCart } = useProducts();

    const handleClick = () => {
        // find by unique id then delete 
        const product = { name, id, idName, image, price };
        removeFromCart(product);
    }

    return (
        <div className="d-flex justify-content-around mt-5">
            <div>
                <img src={image} id={idName} className="card-img-top w-25" alt="..." />
                <h5>{name} Tea</h5>
            </div>
            <div className="pt-4 d-flex flex-column">
                <h4 className="align-self-center">${price}</h4>
                <button className="btn btn-secondary btn-sm h-25 align-self-center" onClick={handleClick}>remove</button>
            </div>
        </div>
    )
}

export default CartProductCard;