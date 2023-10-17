import BookItem from "./BookItem";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("BookItem component", () => {
    it("Render items with info", () => {
        render(
            <BrowserRouter>
                <BookItem
                    img="img"
                    author="author"
                    price="price"
                    name="name"
                    id="id"
                />
            </BrowserRouter>
        )
        expect(screen.getByText("name")).toBeInTheDocument()
        expect(screen.getByText("author")).toBeInTheDocument()
        expect(screen.getByText(/price/)).toBeInTheDocument()
    })
        it ("Render and click to buy item", () => {
            const onClick = jest.fn()
        render(
            <BrowserRouter>
                <BookItem
                    img="img"
                    author="author"
                    price="price"
                    name="name"
                    id="id"
                    isInBasket={false}
                    isBasket={false}
                    handleClickToBuy={onClick}
                />
            </BrowserRouter>
        )
        expect(screen.getByText("Купити")).toBeInTheDocument()
            const BtnBuy = screen.getByText("Купити")
            userEvent.click(BtnBuy)
            expect(onClick).toHaveBeenCalledTimes(1)
    })
    it ("Render and click cancel item", () => {
        const onClick = jest.fn()
        render(
            <BrowserRouter>
                <BookItem
                    img="img"
                    author="author"
                    price="price"
                    name="name"
                    id="1"
                    isInBasket={true}
                    isBasket={true}
                    handleRemoveBasket={onClick}
                />
            </BrowserRouter>
        )
        expect(screen.getByText("Прибрати")).toBeInTheDocument()
        const BtnCancel = screen.getByText("Прибрати")
        userEvent.click(BtnCancel)
        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith("1")
    })
})