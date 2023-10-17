import style from "./SwitchButton.module.scss"

const SwitchButtonItem= (props) => {
    return(
        <button
            onClick={(e) => props.handleClick(props.alt)}
            className={`${style.cardsContainer_buttons_item} ${props.isActive && style.active}`}>
            <img src={props.src} alt={props.alt}/>
        </button>
    )
}

export default SwitchButtonItem