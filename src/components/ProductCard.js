import { useState, useEffect } from 'react';
import useProducts from './ProductContext';

const ProductCard = ({ name, idName, image, desc, price }) => {
    const { products, addToCart, removeFromCart } = useProducts();
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        const productInCart = products.find((product) => product.name === name);

        if (productInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [products, name]);

    const handleClick = () => {
        const product = { name, image, desc, price };
        addToCart(product);
    }


    return (
    <div className="card" id={idName}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-title">{name}</div>
            <div className="card-body">
                <p>{desc}</p>
                <h5>${price}</h5>
            </div>
            <button className='w-fit mx-auto btn btn-light btn-sm btn-outline-success' onClick={handleClick}>Add to Cart</button>
    </div>
    )
}

export default ProductCard;