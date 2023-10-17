import {useEffect} from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';

import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BooksMain from "./components/BooksMain/BooksMain";
import Basket from "./components/Basket/Basket";
import WishList from "./components/WishList/WishList";


const App = (props) => {
    const esLintFixer = props.getBooks
    useEffect(() => {
        axios.get("/books.json").then(res => {
            esLintFixer(res.data)
        }).catch(error => {
            console.error('Ошибка загрузки книг', error);
        });
    }, [esLintFixer])

    const confirmOrder = () => {
        const idCandidate = localStorage.getItem('basketCandidate');
        localStorage.setItem('basket', props.state.basket + 1);
        props.addBasket(idCandidate)

        const basketList = JSON.parse(localStorage.getItem("basketListId"))
        localStorage.setItem("basketListId", JSON.stringify([...basketList, idCandidate]))
    }
    const confirmWishList = () => {
        localStorage.setItem('wishList', props.state.wishList + 1);
        const idCandidate = localStorage.getItem('wishCandidate');
        props.addWishList(idCandidate)

        const wishList = JSON.parse(localStorage.getItem('wishListId'))
        localStorage.setItem("wishListId", JSON.stringify([
            ...wishList,
            idCandidate
        ]))
    }
    const removeWishItem = (idCandidate) => {
        localStorage.setItem('wishList', (props.state.wishList - 1).toString());
        props.removeWishList(idCandidate)

        const wishList = JSON.parse(localStorage.getItem('wishListId'))
        localStorage.setItem("wishListId", JSON.stringify([
            ...wishList.filter(id => id !== idCandidate)
        ]))
    }

    const removeBasketItem = (idCandidate) => {
        localStorage.setItem('basket', (props.state.basket - 1).toString());
        props.removeBasket(idCandidate)

        const basket = JSON.parse(localStorage.getItem('basketListId'))
        localStorage.setItem("basketListId", JSON.stringify([
            ...basket.filter(id => id !== idCandidate)
        ]))
    }

    const handleClickToBuy = () => {
        props.toggleBuyModal()
    }
    const handleClickWishList = () => {
        props.toggleWishListModal()
    }
    const texts = {
        headerFirst: "Увага!",
        headerSecond: "Увага!",
        bodyFirst: "Зверніть увагу, що товар поверненню не підлягає",
        bodySecond: "Ви впевнені, що хочете додати даний товар до обраних?"
    }
    return (
        <BrowserRouter>
            <Header basket={props.state.basket} wishList={props.state.wishList}/>
            <main className="main">
                <div className={"container"}>
                    <Routes>
                        <Route path="/"
                               element={
                                   <BooksMain
                                       books={props.state.books}
                                       handleClickToBuy={handleClickToBuy}
                                       handleClickWishList={handleClickWishList}
                                       handleRemoveWish={removeWishItem}
                                       arrWishList={props.state.arrWishList}
                                       arrBasketList={props.state.arrBasketList}

                                   />
                               }
                        />
                        <Route path="/basket"
                               element={
                                   <Basket
                                       books={props.state.books}
                                       arrBasketList={props.state.arrBasketList}
                                       arrWishList={props.state.arrWishList}
                                       handleClickToBuy={handleClickToBuy}
                                       handleClickWishList={handleClickWishList}
                                       handleRemoveWish={removeWishItem}
                                       handleRemoveBasket={removeBasketItem}

                                   />

                               }
                        />
                        <Route path="/wishlist"
                               element={
                                   <WishList
                                       handleClickToBuy={handleClickToBuy}
                                       arrBasketList={props.state.arrBasketList}
                                       books={props.state.books}
                                       arrWishList={props.state.arrWishList}
                                       handleRemoveWish={removeWishItem}
                                       handleRemoveBasket={removeBasketItem}
                                   />
                               }
                        />
                    </Routes>
                </div>
            </main>
            <Footer/>
            {props.state.openBuyModal === true ?
                <Modal handleClick={handleClickToBuy} confirm={confirmOrder} text1={texts.headerFirst}
                       text2={texts.bodyFirst} theme="danger" isClosed={true}/> : null}
            {props.state.openWishListModal === true ?
                <Modal handleClick={handleClickWishList} confirm={confirmWishList} text1={texts.headerSecond}
                       text2={texts.bodySecond} theme="primary" isClosed={true}/> : null}
        </BrowserRouter>
    )

}

export default App;
