import { createContext, useReducer, useContext } from "react";
import productReducer, {initialState} from "./productReducer";


const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const addToCart = product => {
        const updatedCart = state.products.concat(product);
        updatePrice(updatedCart);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }
        });
    };

    const removeFromCart = product => {
        const updatedCart = state.products.filter(x => x.name !== product.name);
        updatePrice(updatedCart);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart
            }
        });
    };

    const updatePrice = products => {
        let total = 0;
        products.forEach((product) => total += product.price);
        dispatch({
            type: "UPDATE_PRICE",
            payload: {
                total
            }
        });
    };

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart
    };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

const useProducts = () => {
    const context = useContext(ProductContext);
    return context;
}

export default useProducts;