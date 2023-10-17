import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';

import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BooksMain from "./components/BooksMain/BooksMain";
import Basket from "./components/Basket/Basket";
import WishList from "./components/WishList/WishList";

class App extends React.Component {
    static propTypes = {
        basket: PropTypes.number,
        wishList: PropTypes.number
    };

    static defaultProps = {
        basket: 0,
        wishList: 0
    };

    state = {
        openBuyModal: "false",
        openWishListModal: "false",
        books: [],
        basket: 0,
        wishList: 0,
        arrWishList: [],
        arrBasketList: []
    }

    componentDidMount() {
        localStorage.clear()
        this.setState({
            ...this.state,
            basket: localStorage.getItem('basket') ? parseInt(localStorage.getItem('basket')) : 0,
            wishList: localStorage.getItem('wishList') ? parseInt(localStorage.getItem('wishList')) : 0
        })
        axios.get("/books.json").then(res => {
            this.setState({
                ...this.state,
                books: [
                    ...res.data
                ]
            })
        })
    }

    render() {
        const confirmOrder = () => {
            const idCandidate = localStorage.getItem('basketCandidate');
            localStorage.setItem('basket', this.state.basket + 1);
            this.setState({
                ...this.state,
                openBuyModal: "false",
                basket: this.state.basket + 1,
                arrBasketList: [
                    ...this.state.arrBasketList,
                    idCandidate
                ],

            })

        }
        const confirmWishList = () => {
            localStorage.setItem('wishList', this.state.wishList + 1);
            const idCandidate = localStorage.getItem('wishCandidate');
            this.setState({
                ...this.state,
                openWishListModal: "false",
                wishList: this.state.wishList + 1,
                arrWishList: [
                    ...this.state.arrWishList,
                    idCandidate
                ]
            })
        }
        const removeWishItem = (idCandidate) => {
            localStorage.setItem('wishList', this.state.wishList - 1);
            let newWishList = this.state.arrWishList.filter(id => {
                if (id !== idCandidate) {
                    return id
                }
            })
            this.setState({
                ...this.state,
                openWishListModal: "false",
                wishList: this.state.wishList - 1,
                arrWishList: [
                    ...newWishList
                ]
            })
        }
        const handleClickToBuy = () => {
            this.setState({
                ...this.state,
                openBuyModal: this.state.openBuyModal === "false" ? "true" : "false"
            })
        }
        const handleClickWishList = () => {
            this.setState({
                ...this.state,
                openWishListModal: this.state.openWishListModal === "false" ? "true" : "false"
            })
        }
        const texts = {
            headerFirst: "Увага!",
            headerSecond: "Увага!",
            bodyFirst: "Зверніть увагу, що товар поверненню не підлягає",
            bodySecond: "Ви впевнені, що хочете додати даний товар до обраних?"
        }
        return (
            <BrowserRouter>
                <Header basket={this.state.basket} wishList={this.state.wishList}/>
                <main className="main">
                    <div className={"container"}>
                        <Routes>
                            <Route path="/"
                                   element={
                                       <BooksMain
                                           books={this.state.books}
                                           handleClickToBuy={handleClickToBuy}
                                           handleClickWishList={handleClickWishList}
                                           handleRemoveWish={removeWishItem}
                                           arrWishList={this.state.arrWishList}
                                           arrBasketList={this.state.arrBasketList}
                                       />
                                   }
                            />
                            <Route path="/basket"
                                   element={
                                       <Basket
                                           books={this.state.books}
                                           arrBasketList={this.state.arrBasketList}
                                           arrWishList={this.state.arrWishList}
                                           handleClickWishList={handleClickWishList}
                                           handleRemoveWish={removeWishItem}
                                       />

                                   }
                            />
                            <Route path="/wishlist"
                                   element={
                                       <WishList
                                           handleClickToBuy={handleClickToBuy}
                                           arrBasketList={this.state.arrBasketList}
                                           books={this.state.books}
                                           arrWishList={this.state.arrWishList}
                                           handleRemoveWish={removeWishItem}
                                       />
                                   }
                            />
                        </Routes>
                    </div>
                </main>
                <Footer/>
                {this.state.openBuyModal === "true" ?
                    <Modal handleClick={handleClickToBuy} confirm={confirmOrder} text1={texts.headerFirst}
                           text2={texts.bodyFirst} theme="danger" isClosed={true}/> : null}
                {this.state.openWishListModal === "true" ?
                    <Modal handleClick={handleClickWishList} confirm={confirmWishList} text1={texts.headerSecond}
                           text2={texts.bodySecond} theme="primary" isClosed={true}/> : null}
            </BrowserRouter>
        )
    }
}

export default App;
