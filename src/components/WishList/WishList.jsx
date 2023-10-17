import BookItem from "../BooksMain/Book-item/BookItem";
import style from "./WishList.module.scss"

const WishList = (props) => {
    let wishBooks = props.books.filter(book => {
        if (props.arrWishList.indexOf(book.id) !== -1) {
            return book;
        }
        return null
    })
    const BooksCollection = wishBooks.map((book, index) =>{
        return <BookItem
            key={index}
            arrWishList={props.arrWishList}
            id={book.id}
            img={book.img}
            author={book.author}
            name={book.name}
            price={book.price}
            isWish = {true}
            handleRemoveWish = {props.handleRemoveWish}
            handleClickToBuy={props.handleClickToBuy}
        />
    })

    return (
       <div className={style.container}>
           {BooksCollection.length !== 0 ? BooksCollection : <div className={style.emptyContainer}>
               <img src="https://www.elitejewelryhouse.com/assets/images/empty-wishlist.png" alt="Пусто" title="Пусто" className={style.emptyContainer_img}/>
           </div>}
       </div>

    )
}

export default WishList