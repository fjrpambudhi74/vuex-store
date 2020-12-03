// Get All Product from API
export const SET_PRODUCTS = (state,products) => {
state.products = products;
}

// Get Product ID from API
export const SET_PRODUCT = (state,product) => {
    state.product = product;
}

// Add Product from state
export const ADD_TO_CART = (state, {product, quantity}) => {
    // Add Quantity in cart
    let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
    })

    if(productInCart) {
        productInCart.quantity += quantity;
        return;
    }

    // Add Prodcut Item cart to state
    state.cart.push({
        product,
        quantity
    })
}

// Get Product Item From API
export const SET_CART = (state, cart) => {
    state.cart = cart;
}

// Remove Product Item from state and API
export const REMOVE_CART = (state, product) => {
    // state.cart = state.cart.filter(item => {
    //     return item.product.id !== product.id
    // })

    state.cart.splice(product,1)
}

// Clear or remove all product in state and API
export const CLEAR_CART = (state) => {
    state.cart = [];
}