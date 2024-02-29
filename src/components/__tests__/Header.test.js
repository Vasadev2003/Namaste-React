import { fireEvent, render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"


describe("Header Testing",()=>{

    test("Header Component is Rendered Or Not",()=>{
        render(
     <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
    </BrowserRouter> );
    
    const loginButton = screen.getByRole("button",{name : "Login"});
    expect(loginButton).toBeInTheDocument();
        
        
    })
    
    
    test("Cart Items",()=>{
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const cart = screen.getByText("Cart Items = 0")
    /* const cart = screen.getByText(/Cart/); */
    expect(cart).toBeInTheDocument();
    })
    
    test("Cart Items",()=>{
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const Login = screen.getByRole("button",{name : "Login"})
    
    fireEvent.click(Login);
    
    const logout = screen.getByRole("button",{name : "Logout"})
    
    expect(logout).toBeInTheDocument();
    
    })
})

