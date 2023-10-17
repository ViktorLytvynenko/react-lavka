
import PropTypes from "prop-types";
import SwitchButton from "./SwitchButton/SwitchButton";

const BooksMain = (props) => {
    const booksInfo = props.books.map((book, index) => ({
            key: index,
            arrWishList: props.arrWishList,
            id : book.id,
            img : book.img,
            author : book.author,
            name : book.name,
            price : book.price,
            handleClickToBuy : props.handleClickToBuy,
            handleClickWishList : props.handleClickWishList,
            handleRemoveWish : props.handleRemoveWish

    }))
    return (
        <>
            <SwitchButton booksInfo={booksInfo}/>
        </>
    )
}
BooksMain.propTypes = {
    books: PropTypes.array.isRequired,
    arrWishList: PropTypes.array,
    handleClickToBuy: PropTypes.func.isRequired,
    handleClickWishList: PropTypes.func.isRequired,
    handleRemoveWish: PropTypes.func.isRequired
};

BooksMain.defaultProps = {
    arrWishList: [],
};

export default BooksMain
