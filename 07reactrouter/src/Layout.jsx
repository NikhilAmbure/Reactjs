import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

// Outlet => Header will remain same and Footer will remain same only mid content will change

function Layout(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout