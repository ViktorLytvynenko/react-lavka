import style from "./Modal.module.scss";
import Buttons from "./Buttons/Buttons";
import closeButton from "../../img/closeButton.png";
import PropTypes from 'prop-types';


const Modal = (props) => {

    let themeStyle = {};
    if (props.theme === "danger") {
        themeStyle.header = style.modal_header_danger;
        themeStyle.body = style.modal_body_danger;
        themeStyle.buttons = style.modal_body_container_button_danger;
    }
    if (props.theme === "primary") {
        themeStyle.header = style.modal_header_primary;
        themeStyle.body = style.modal_body_primary;
        themeStyle.buttons = style.modal_body_container_button_primary;
    }
    return (
        <>
        <div className={style.modalContainer} onClick={props.handleClick}>
        <div className={style.modal} onClick={(event) => {event.stopPropagation()}}>
            <div className={`${style.modal_header} ${themeStyle.header}`}>
                <p>{props.text1}</p>
                {props.isClosed ?
                    <button onClick={props.handleClick}>
                        <img src={closeButton} alt="closedBtn"/>
                    </button> : null}
            </div>
            <div className={`${style.modal_body} ${themeStyle.body}`}>
                <p>{props.text2}</p>
                <p>Підтвердіть Ваш вибір</p>
                <Buttons handleClick={props.handleClick} confirm={props.confirm} themeStyle={themeStyle.buttons}/>
            </div>
        </div>
        </div>
        </>
    )
}

Modal.propTypes = {
    theme: PropTypes.oneOf(['danger', 'primary']).isRequired,
    text1: PropTypes.string.isRequired,
    isClosed: PropTypes.bool,
    text2: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    confirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    isClosed: false,
};

export default Modal