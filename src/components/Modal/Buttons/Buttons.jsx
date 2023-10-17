import style from "../Modal.module.scss";

const Buttons = (props) => {
    return (
        <div className={style.modal_body_container}>
            <button className={`${style.modal_body_container_button} ${props.themeStyle}`} onClick={props.confirm}>Підтверджую</button>
            <button className={`${style.modal_body_container_button} ${props.themeStyle}`} onClick={props.handleClick}>Відмінити</button>
        </div>
        )
}

export default Buttons
