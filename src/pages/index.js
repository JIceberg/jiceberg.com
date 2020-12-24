import React from "react"
import Header from "../components/header"
import Subtitle from "../components/subtitle"
import Body from "../components/body"
import { Helmet } from "react-helmet"

function Home() {
    return (
        <div style={{ color: 'black', padding: '15px' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jackson Isenberg</title>
            </Helmet>
            <Header headerText="Jackson Isenberg"/>
            <Subtitle text="Welcome to my website!" />
            <Body />
        </div>
    );
}

export default Home