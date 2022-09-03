import type { NextPage } from 'next'
import { Navigation } from "../components/Navigation/Navigation.component";
import React from "react";
import { Main } from "../components/Main/Main.component";
import {FooterComponent} from "../components/Footer/Footer.component";

const Home: NextPage = () => {
    return (
        <>
            <Navigation />
            <Main />
            <FooterComponent />
        </>
    )
}

export default Home
