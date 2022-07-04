const CartProductCard = ({ name, idName, image, price }) => {
    return (
        <div className="d-flex justify-content-around mt-5">
            <div>
                <img src={image} id={idName} className="card-img-top w-25" alt="..." />
                <h5 className="">{name} Tea</h5>
            </div>
            <h4 className="align-self-center">${price}</h4>
        </div>
    )
}

export default CartProductCard;