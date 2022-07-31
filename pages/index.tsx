import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navigation } from "../components/Navigation/Navigation.component";
import React from "react";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>

            <Navigation />
        </div>
    )
}

export default Home
