import Product from '../Api/Product';
import Cart from '../Api/Cart';

// Get All Product List from API
export const getProducts = ({commit}) => {
    Product.all()
    // axios.get('http://localhost:3000/products')
    .then(res => {
        commit('SET_PRODUCTS', res.data);
    });
}

// Get Product ID from API
export const getProduct = ({commit},productId) => {
    Product.show(productId)
    // axios.get(`http://localhost:3000/products/${productId}`)
    .then(res => {
        commit('SET_PRODUCT', res.data);
    });
}


// Add Product to Cart
export const addProduct = ({commit}, {product, quantity}) => {
    // Add Item Cart to state
    commit('ADD_TO_CART', {product,quantity});
    // Add Item Cart to API
    Cart.store({
        product,
        quantity
    });
    // axios.post('http://localhost:3000/cart', {product,quantity})
}

// Get product item to cart from API
export const getCartItems = ({commit}) => {
    Cart.all()
    // axios.get('http://localhost:3000/cart')
    .then(res => {
        commit('SET_CART', res.data);
    });
}

export const removeCart = ({commit}, product) => {
    // Delete Item from state
    commit('REMOVE_CART', product);
    // Delete Item from API
    Cart.delete(product.id);
    // axios.delete(`http://localhost:3000/cart/${product.id}`);
}

export const clearCart = ({commit}) => {
    // Clear Cart from state
    commit('CLEAR_CART')
    // Clear Cart from API
    Cart.deleteAll();
    // axios.delete('http://localhost:3000/cart'); //Clear Cart from API ERROR!!!
}
