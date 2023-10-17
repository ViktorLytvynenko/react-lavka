import productsReducer, {
    addBasket,
    addWishList, createOrder, getBooks,
    removeBasket, removeWishList,
    toggleBuyModal,
    toggleWishListModal
} from "./productsReducer";

const initialState = {
    openBuyModal: false,
    openWishListModal: false,
    books: [],
    basket: 0,
    wishList: 0,
    arrWishList: [],
    arrBasketList: []
}

describe("Products reducer", () =>{
    it("toggleBuyModal", () => {
        const action = toggleBuyModal()
        const newState = productsReducer(initialState, action)
        expect(newState.openBuyModal).toBe(true)
    })
    it("toggleWishListModal", () => {
        const action = toggleWishListModal()
        const newState = productsReducer(initialState, action)
        expect(newState.openWishListModal).toBe(true)
    })
    it("addBasket", () => {
        const id = 1
        const action = addBasket(id)
        const newState = productsReducer(initialState, action)
        expect(newState.openBuyModal).toBe(false)
        expect(newState.basket).toBe(1)
        expect(newState.arrBasketList.indexOf(1)).not.toBe(-1)
    })
    it("addWishList", () => {
        const id = 1
        const action = addWishList(id)
        const newState = productsReducer(initialState, action)
        expect(newState.openWishListModal).toBe(false)
        expect(newState.wishList).toBe(1)
        expect(newState.arrWishList.indexOf(1)).not.toBe(-1)
    })
    it("removeBasket", () => {
        const id = 1
        const stateForRemoveBasket = {
            ...initialState,
            basket: 1,
            arrBasketList: [id]
        }
        const action = removeBasket()
        const newState = productsReducer(stateForRemoveBasket, action)
        expect(newState.openBuyModal).toBe(false)
        expect(newState.basket).toBe(0)
        expect(newState.arrBasketList.indexOf(id)).not.toBe(-1)
    })
    it("removeWishList", () => {
        const id = 1
        const stateForRemoveWishList = {
            ...initialState,
            wishList: 1,
            arrWishList: [id]
        }
        const action = removeWishList()
        const newState = productsReducer(stateForRemoveWishList, action)
        expect(newState.openWishListModal).toBe(false)
        expect(newState.wishList).toBe(0)
        expect(newState.arrWishList.indexOf(id)).not.toBe(-1)
    })
    it("getBooks", () => {
        const stateForGetBooks = {
            ...initialState,
            books: ["book"]
        }
        const action = getBooks(["book"])
        const newState = productsReducer(stateForGetBooks, action)
        expect(newState.books[0]).toBe("book")
        expect(newState.books.length).toBe(1)
    })
    it("createOrder", () => {
        const action = createOrder()
        const newState = productsReducer(initialState, action)
        expect(newState.basket).toBe(0)
        expect(newState.arrBasketList).toEqual([])
    })
})

/*
* Order:Phone
* getByText('Phone') - Error
* getByText('Order:Phone') - Ok
* getByText(/Phone/) - Ok
* getByText(/phone/i) - Ok
* */