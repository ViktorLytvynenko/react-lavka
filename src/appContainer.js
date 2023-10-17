import {
    toggleBuyModal,
    toggleWishListModal,
    addBasket,
    addWishList,
    removeWishList,
    removeBasket,
    getBooks,
    createOrder
} from "./redux/reducers/productsReducer"
import {connect} from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
    state: {
            ...state.productsPage
        }
})

const mapDispatchToProps = {
    toggleBuyModal,
    toggleWishListModal,
    addBasket,
    addWishList,
    removeWishList,
    removeBasket,
    getBooks,
    createOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(App)