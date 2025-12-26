import React from 'react';
import {Header} from "../layout/Header.jsx";
import {Footer} from "../layout/Footer.jsx";
import {Main} from "../layout/Main.jsx";

export function App() {

    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    )
}