const CartProductCard = ({ name, image }) => {

    return (
        <div className="card" id={name}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-title">{name}</div>
        </div>
    )
}

export default CartProductCard;