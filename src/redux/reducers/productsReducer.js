import types from "./types";

const initialState = {
    openBuyModal: false,
    openWishListModal: false,
    books: [],
    basket: localStorage.getItem('basket') ? parseInt(localStorage.getItem('basket')) : 0,
    wishList: localStorage.getItem('wishList') ? parseInt(localStorage.getItem('wishList')) : 0,
    arrWishList: localStorage.getItem('wishListId') ? JSON.parse(localStorage.getItem("wishListId")) : [],
    arrBasketList: localStorage.getItem("basketListId") ? JSON.parse(localStorage.getItem("basketListId")) : []
}
/*
1 Открытие и закрытие модальных окон
2 Подтверждение покупки
3 Добавление в избранное
4 Удаление из избранного
 */

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_BUY_MODAL:
            return {
                ...state,
                openBuyModal: !state.openBuyModal
            }
        case types.TOGGLE_WISHLIST_MODAL:
            return {
                ...state,
                openWishListModal: !state.openWishListModal
            }
        case types.ADD_BASKET:
            return {
                ...state,
                openBuyModal: false,
                basket: state.basket + 1,
                arrBasketList: [
                    ...state.arrBasketList,
                    action.idCandidate
                ]
            }

        case types.ADD_WISHLIST:
            return {
                ...state,
                openWishListModal: false,
                wishList: state.wishList + 1,
                arrWishList: [
                    ...state.arrWishList,
                    action.idCandidate
                ]
            }

        case types.REMOVE_WISHLIST:
            return {
                ...state,
                openWishListModal: false,
                wishList: state.wishList - 1,
                arrWishList: [
                    ...state.arrWishList.filter(id => id !== action.idCandidate)
                ]
            }
        case types.REMOVE_BASKET:
            return {
                ...state,
                openBuyModal: false,
                basket: state.basket - 1,
                arrBasketList: [
                    ...state.arrBasketList.filter(id => id !== action.idCandidate)
                ]
            }
        case types.GET_BOOKS:
            return {
                ...state,
                books: [
                    ...action.books
                ]
            }
        case types.CREATE_ORDER:
            return {
                ...state,
                basket: 0,
                arrBasketList: []
            }

        default:
            return state
    }
}

export const toggleBuyModal = () => ({
    type: types.TOGGLE_BUY_MODAL
})

export const toggleWishListModal = () => ({
    type: types.TOGGLE_WISHLIST_MODAL,
})

export const addBasket = (idCandidate) => ({
    type: types.ADD_BASKET,
    idCandidate
})

export const addWishList = (idCandidate) => ({
    type: types.ADD_WISHLIST,
    idCandidate
})

export const removeWishList = (idCandidate) => ({
    type: types.REMOVE_WISHLIST,
    idCandidate
})

export const removeBasket = (idCandidate) => ({
    type: types.REMOVE_BASKET,
    idCandidate
})

export const getBooks = (books) => ({
    type: types.GET_BOOKS,
    books
})

export const createOrder = () => ({
    type: types.CREATE_ORDER,
})

export default productsReducer
