import type { NextPage } from 'next'
import { Provider } from '../infrastruture/appContext';
import { Navigation } from "../components/Navigation/Navigation.component";
import React, { useRef } from "react";
import { Main } from "../components/Main/Main.component";
import { FooterComponent } from "../components/Footer/Footer.component";

const Home: NextPage = () => {
    const aboutCompany = useRef(null);
    const contact = useRef(null);

    return (
        <>
            <Provider value={{aboutCompany, contact}}>
                <div className={`wrapper`}>
                    <Navigation />
                    <Main />
                    <FooterComponent />
                </div>
            </Provider>

        </>
    )
}

export default Home
