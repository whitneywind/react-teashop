export const initialState = {
    total: 0,
    products: []
};

const productReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            console.log('adding to cart', action, payload);
            return {
                ...state,
                products: payload.products
            };
        case "REMOVE_FROM_CART":
            console.log('removing from cart', payload);
            return {
                ...state,
                products: payload.products
            };
        case "UPDATE_PRICE":
            return {
                ...state,
                total: payload.total
            };
        default: 
            throw new Error('no case for this type: ${type}')
    }
};

export default productReducer;