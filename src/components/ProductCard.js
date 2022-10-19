import { useState, useEffect } from 'react';
import useProducts from './ProductContext';

const ProductCard = ({ name, idName, image, desc, price }) => {
    const { products, addToCart } = useProducts();
    // const [inCart, setInCart] = useState(false);

    // useEffect(() => {
    //     const productInCart = products.find((product) => product.name === name);

    //     if (productInCart) {
    //         setInCart(true);
    //     } else {
    //         setInCart(false);
    //     }
    // }, [products, name]);

    const handleClick = () => {
      // let uniqueId = Math.random().toFixed(0) * 10;

       // add another prop to distinguish individual items 
        const product = { name, idName, image, desc, price };
        console.log('the product being added: ', product);
        addToCart(product);
    }

    return (
    <div className="card" id={idName}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-title">{name}</div>
            <div className="card-body">
                <p>{desc}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='my-auto'>${price}</h5>
                    <button className='w-fit btn btn-light btn-sm btn-outline-success' onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
    </div>
    )
}

export default ProductCard;