import Buttons from "./Buttons";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Buttons component", () => {
    it("Render Buttons with text", () => {
        render(
            <Buttons/>
        )
        expect(screen.getByText("Підтверджую")).toBeInTheDocument()
        expect(screen.getByText("Відмінити")).toBeInTheDocument()
    })
    it("Check confirm click", () => {
        const onClick = jest.fn()
        render(
            <Buttons
                confirm={onClick}
            />
        )
        const btnConfirm = screen.getByText("Підтверджую")
        userEvent.click(btnConfirm)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
    it("Check cancel click", () => {
        const onClick = jest.fn()
        render(
            <Buttons
                handleClick={onClick}
            />
        )
        const btnCancel = screen.getByText("Відмінити")
        userEvent.click(btnCancel)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
    it("Buttons snapshot", () => {
        let container;
        container = render(
            <Buttons data-testid="test"/>
        );
        expect(container).toMatchSnapshot();
    });
})