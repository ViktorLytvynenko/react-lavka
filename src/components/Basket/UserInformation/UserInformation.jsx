import {useFormik} from "formik";
import {PatternFormat} from "react-number-format";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {createOrder} from "../../../redux/reducers/productsReducer";
import style from "./UserInformation.module.scss"


const UserInformation = (props) => {
    const dispatch = useDispatch()


    const clearBasket = () => {
        localStorage.setItem("basketListId", JSON.stringify([]))
        localStorage.setItem("basket", "")
        dispatch(createOrder())
    }

    const createOrderInfo = () =>
        props.books.filter(book => {
            if (props.arrBasketList.indexOf(book.id) !== -1) {
                return book.name
            }
            else return null
        })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            email: "",
            phone: ""
        },
        onSubmit: (values, {resetForm}) => {
            console.log("Ваші данні", values, "Ваше замовлення", createOrderInfo())
            clearBasket()
            resetForm()
            props.test && props.test(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(1, "Має бути більше символів")
                .max(50, "Має бути меньше символів")
                .required("Будь ласка введіть ім'я"),
            lastName: Yup.string()
                .min(1, "Має бути більше символів")
                .max(50, "Має бути меньше символів")
                .required("Будь ласка введіть прізвище"),
            age: Yup.number()
                .min(10, "Має бути більше символів")
                .max(199, "Має бути меньше символів")
                .required("Будь ласка введіть вік"),
            address: Yup.string()
                .min(10, "Має бути більше символів")
                .max(100, "Має бути меньше символів")
                .required("Будь ласка введіть адресу"),
            email: Yup.string().email()
                .min(5, "Має бути більше символів")
                .max(40, "Має бути меньше символів")
                .required("Будь ласка введіть емейл"),
            phone: Yup.string()
                .required("Будь ласка введіть номер телефону")
        })
    })
    return (
        <div className={style.container}>
            <div className={style.container_header}>Ваша інформація</div>
            <form
                onSubmit={formik.handleSubmit}
                autoComplete="off"
                noValidate
                className={style.container_body}>
                <div>
                    <label htmlFor="firstName">
                        Ім'я
                    </label>
                    <input
                        autoFocus
                        placeholder="Ім'я"
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                        <p className={style.error}>{formik.errors.firstName}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="lastName">
                        Прізвище
                    </label>
                    <input
                        placeholder="Прізвище"
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                        <p className={style.error}>{formik.errors.lastName}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="age">
                        Вік
                    </label>
                    <input
                        placeholder="Вік"
                        type="number"
                        name="age"
                        id="age"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.age && formik.errors.age && (
                        <p className={style.error}>{formik.errors.age}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="address">
                        Адреса
                    </label>
                    <input
                        placeholder="Адреса"
                        type="text"
                        name="address"
                        id="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address && (
                        <p className={style.error}>{formik.errors.address}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        placeholder="Емейл"
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className={style.error}>{formik.errors.email}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="phone">
                        Телефон
                    </label>
                    <PatternFormat format="+38 (###) ###-##-##"
                                   allowEmptyFormatting mask="_"
                                   name="phone"
                                   id="phone"
                                   value={formik.values.phone}
                                   onChange={formik.handleChange}
                                   className={style.phone}
                                   onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <p className={style.error}>{formik.errors.phone}</p>
                    )}
                </div>
                <button type="submit" className={style.container_body_button}>Оформити замовлення</button>
            </form>
        </div>

    )
}

export default UserInformation