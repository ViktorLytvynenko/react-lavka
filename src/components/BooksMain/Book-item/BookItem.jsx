import style from "../BooksMain.module.scss"
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";


const BookItem = (props) => {
    let name = ""
    if (props.name.length >= 40) {
        for (let i = 0; i <= 40; i++) {
            name += props.name[i]
        }
        name += '...'
    } else {
        name = props.name
    }
    let handleWishList = () => {

        localStorage.setItem('wishCandidate', props.id)
        props.handleClickWishList()
    }
    let handleBuy = () => {
        localStorage.setItem('basketCandidate', props.id)
        props.handleClickToBuy()
    }

    let handleRemove = ()=>{props.handleRemoveBasket(props.id)}

    const setButton = () => (
        props.isInBasket ?
            <button onClick={handleRemove} className={style.main_container_c_c_c4_button_delete}>Прибрати</button> :
            <button onClick={handleBuy} className={style.main_container_c_c_c4_button}>Купити</button>
    )

    let isWish  ;
    if ( Array.isArray(props.arrWishList)){
        isWish = props.arrWishList.indexOf(props.id) ;
    } else {
        isWish = -1
    }
    let theme = "";
    let btnIcon
    if (isWish !== -1) {
        theme = style.themeRed
        handleWishList = () => {
            props.handleRemoveWish(props.id)
        }
        btnIcon = () => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={style.main_container_c_c_heart_img} stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                          fill="#ffffff"></path>
                </g>
            </svg>
        )
    } else {
        theme = style.themeBlue;
        btnIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                              className={style.main_container_c_c_heart_img}>
            <path
                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
        </svg>)
    }
    return (
        <div className={`${style.main_container_c} ${props.viewMod === 'list' && style.main_container_c_list}`}>
            <div className={style.main_container_c_c}>
                <button className={`${style.main_container_c_c_heart} ${theme}`} onClick={handleWishList}>
                    {btnIcon()}
                </button>
                <NavLink to="/" className={style.main_container_c_c_c1}>
                    <img className={style.main_container_c_c_c1_img} src={props.img} alt={props.name}
                         title={props.name}/>
                </NavLink>
                <NavLink to="/" className={style.main_container_c_c_c2}>{name}</NavLink>
                <NavLink to="/" className={style.main_container_c_c_c3}>{props.author}</NavLink>
                <div className={style.main_container_c_c_c4}>
                    <p>{props.price} грн.</p>
                    {props.isBasket ? setButton() : <button onClick={handleBuy} className={style.main_container_c_c_c4_button}>Купити</button>}
                </div>
            </div>
        </div>
    )
}

BookItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    arrWishList: PropTypes.array,
    handleClickWishList: PropTypes.func,
    handleClickToBuy: PropTypes.func,
    handleRemoveWish: PropTypes.func,
    isWish: PropTypes.bool
};

BookItem.defaultProps = {
    arrWishList: [],
};

export default BookItem