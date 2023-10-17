import styleSwitch from "./SwitchButton.module.scss"
import style from "../BooksMain.module.scss";

import SwitchButtonItem from "./SwitchButtonItem";
import {useContext, useEffect, useState} from "react";
import {ViewContext} from "../../../index";
import BookItem from "../Book-item/BookItem";

const SwitchButton = ({booksInfo}) => {
    const [viewMod, setViewMod] = useState(useContext(ViewContext))
    const [BookCollection, setBookCollection] = useState(null)
    const handleClick = (btnName) => {

        setViewMod(btnName)
    }
    useEffect(() => {
        setBookCollection(booksInfo.map(el=>{
                return (
                    <BookItem
                        {...el}
                        viewMod = {viewMod}
                    />
                )
            })
        )
        localStorage.setItem('viewMod', `${viewMod}`)
    }, [viewMod, booksInfo])

    return (
        <>
        <div className={styleSwitch.cardsContainer}>
            <div className={styleSwitch.cardsContainer_buttons}>
                <SwitchButtonItem handleClick={handleClick} src={"/list.svg"} alt={"list"}
                                  isActive={viewMod === 'list'}/>
                <SwitchButtonItem handleClick={handleClick} src={"/cards.svg"} alt={"cards"}
                                  isActive={viewMod === 'cards'}/>
            </div>
        </div>
            <div className={`${style.main_container} ${viewMod==='list' && style.main_container_list}`}>
                {BookCollection}
            </div>
        </>
    )
}
export default SwitchButton