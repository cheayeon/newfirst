import Home from "../pages/index";
import Calculate from "../pages/calculate";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
    it("renders a calculator", () => {
        
        render(<Calculate />);
        
        
        //check if
        expect(screen.getByTestId("num1")).toBeInTheDocument();
        expect(screen.getByTestId("num2")).toBeInTheDocument();
        expect(screen.getByTestId("num3")).toBeInTheDocument();
        expect(screen.getByTestId("add")).toBeInTheDocument();
        expect(screen.getByTestId("sub")).toBeInTheDocument();
        expect(screen.getByTestId("div")).toBeInTheDocument();
        expect(screen.getByTestId("mul")).toBeInTheDocument();

        const num1in = screen.getByTestId("num1");
        const num2in = screen.getByTestId("num2");
        const subbut = screen.getByTestId("sub");
        const num3re = screen.getByTestId("num3");
        
        fireEvent.change(num1in, {target : {value : 5}});
        fireEvent.change(num2in, {target : {value : 2}});
        fireEvent.click(subbut);

        expect(num3re).toHaveTextContent("3");
    });
});

describe("Text", () => {
    it("renders a text", () => {
        render(<Home />);
        expect(screen.getByTestId("tex")).toBeInTheDocument();
        expect(screen.getByTestId("tex")).toHaveTextContent("hi");
    });
});