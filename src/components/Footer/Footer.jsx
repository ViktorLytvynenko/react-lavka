import footerLogo from "../../img/footer-logo.svg"
import style from "./Footer.module.scss"
import {NavLink} from "react-router-dom";

const Footer = () => {
    const linkStore = ["Інформація", "Каталог", "Новини", "Види оплати"];
    const LinkCollection = linkStore.map((linkItem, index) =>
        <NavLink to="/" key={index} className={style.footer_container_nav}>{linkItem}</NavLink>)
    return (
        <footer className={style.footer}>
            <div className={style.footer_container}>
                <NavLink to="/" className={style.footer_container_c1}>
                    <img className={style.footer_container_c1_img} src={footerLogo} alt="Логотип"
                         title="Логотип"/>
                </NavLink>
                {LinkCollection}
            </div>
            <hr/>
                <p className={style.footer_copyright}>
                    © 2003 — 2023 Всі права захищені. Використання матеріалів сайту можливе тільки з письмового дозволу
                    компанії.
                </p>
        </footer>
    )
}

export default Footer