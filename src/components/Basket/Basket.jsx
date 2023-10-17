import BookItem from "../BooksMain/Book-item/BookItem";
import style from "./Basket.module.scss"
import UserInformation from "./UserInformation/UserInformation";

const Basket = (props) => {
    let basketBooks = props.books.filter(book => props.arrBasketList.indexOf(book.id) !== -1)
    const BooksCollection = basketBooks.map((book, index) =>{
        return <BookItem
            key={index}
            arrWishList={props.arrWishList}
            id={book.id}
            img={book.img}
            author={book.author}
            name={book.name}
            price={book.price}
            handleClickToBuy={props.handleClickToBuy}
            handleRemoveWish = {props.handleRemoveWish}
            handleClickWishList={props.handleClickWishList}
            isInBasket = {
                props.arrBasketList.indexOf(book.id) !== -1
            }
            handleRemoveBasket = {props.handleRemoveBasket}
            isBasket = {true}
        />
    })
    return (
        <>
        <div className={style.container}>
            {BooksCollection.length !== 0 ? BooksCollection : <div className={style.emptyContainer}>
                <img src="https://www.elitejewelryhouse.com/assets/images/empty-wishlist.png" alt="Пусто" title="Пусто" className={style.emptyContainer_img}/>
            </div>}
        </div>
        <UserInformation
            books={props.books}
            arrBasketList={props.arrBasketList}
        />
        </>
    )
}

export default Basket