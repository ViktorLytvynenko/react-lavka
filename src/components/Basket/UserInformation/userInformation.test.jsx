import UserInformation from "./UserInformation";
import {getByTestId, render, screen} from "@testing-library/react";
import store from "../../../redux/store";
import {Provider} from "react-redux";
import userEvent from "@testing-library/user-event";

describe("UserInformation component", () => {
    it("Render button", () => {
        render(
            <Provider store={store}>
                <UserInformation/>
            </Provider>
        )
        expect(screen.getByText("Оформити замовлення")).toBeInTheDocument()
    })
})