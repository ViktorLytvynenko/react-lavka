import Modal from "./Modal";
import {render, screen} from "@testing-library/react";

describe('Modal component', () => {
    it("Render Modal with text", () => {
        render(
            <Modal
                theme="danger"
                text1="1"
                text2="2"
                handleClick={()=>{}}
                confirm={()=>{}}
            />
        )
        expect(screen.getByText("1")).toBeInTheDocument()
        expect(screen.getByText("2")).toBeInTheDocument()
    })
    it("Modal snapshot", () => {
        let modal;
        modal = render(
            <Modal
                theme="danger"
                text1="1"
                text2="2"
                handleClick={()=>{}}
                confirm={()=>{}}
            />
        )
        expect(modal).toMatchSnapshot()
    })
})