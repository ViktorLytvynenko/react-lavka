import headerLogo from "../../img/LAVKABABUIN_logos 12.svg";
import style from "./Header.module.scss";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const linkStore = ["Про нас", "Акції", "Доставка", "Оплата", "Блог", "Контакти"];
    const LinkCollection = linkStore.map((linkItem, index) => <li key={index}
                                                                  className={style.header_container_rightContainer_li}>{linkItem}</li>)
    return (
        <header className={style.header}>
            <div className={style.header_container}>
                <NavLink to="/" className={style.header_container_leftContainer}>
                    <img className={style.header_container_leftContainer_img} src={headerLogo} alt="Логотип"
                         title="Логотип"/>
                </NavLink>
                <ul className={style.header_container_rightContainer}>
                    {LinkCollection}
                </ul>
            </div>
            <div className={style.header_container2}>
                <button className={style.header_container2_catalog}>Каталог товарів</button>
                <div className={style.header_container2_search}>
                    <input type="text" placeholder="Пошук" className={style.header_container2_search_input}
                           id="searchInput"/>
                    <button className={style.header_container2_search_button}>Знайти</button>
                </div>
                <div className={style.header_container2_buttonsContainer}>
                    <NavLink to="/wishList" className={style.header_container2_buttonsContainer_heart}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             className={style.header_container2_buttonsContainer_heart_img}>
                            <path
                                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                        </svg>
                        <div className={style.header_container2_buttonsContainer_wishListCount}>{props.wishList}</div>
                        <p className={style.header_container2_buttonsContainer_heart_name}>Закладки</p>
                    </NavLink>
                    <NavLink to="/basket" className={style.header_container2_buttonsContainer_basket}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                             className={style.header_container2_buttonsContainer_basket_img}>
                            <path
                                d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
                        </svg>
                        <div className={style.header_container2_buttonsContainer_basketCount}>{props.basket}</div>
                        <p className={style.header_container2_buttonsContainer_basket_name}>Кошик</p>
                    </NavLink>
                </div>
            </div>
        </header>
)
}

Header.propTypes =
    {
        wishList: PropTypes.number,
        basket: PropTypes.number,
    };

Header.defaultProps =
    {
        wishList: 0,
        basket: 0,
    }
;

export default Header