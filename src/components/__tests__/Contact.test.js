import ContactUs from "../ContactUs"
import {screen ,render} from "@testing-library/react"
import "@testing-library/jest-dom"


describe("Testing For Contact Us Page",()=>{
    test("Whether the Heading Rendered in the Document",()=>{
        render(<ContactUs/>)
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    test("Whether the PlaceHolder Is Present Or Not",()=>{
        render(<ContactUs/>)
        const placeholder = screen.getByPlaceholderText("Name");
        expect(placeholder).toBeInTheDocument();
    })
    
    test("Whether the Input Box is renderd in the Page",()=>{
        render(<ContactUs/>)
        
        const input = screen.getAllByRole("textbox");
        expect(input.length).toBe(2); 
    })
})
