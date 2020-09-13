import React from "react"
import Header from "../components/header"
import Subtitle from "../components/subtitle"
import Body from "../components/body"

function Home() {
    return (
        <div style={{ color: 'black', padding: '15px' }}>
            <Header headerText="Jackson Isenberg"/>
            <Subtitle text="Welcome to my website!" />
            <Body />
        </div>
    );
}

export default Home