import React from "react"
import CustomLink from "../components/link"

export default function Body() {
    return (
        <p style={{ color: 'black', font: '400 15pt sans-serif', top: '0px' }}>
            My name is Jackson Isenberg, and I&#39;m a computer science major
            from the <CustomLink href="https://www.gatech.edu" text="Georgia Institute of Technology" color="gold" />.
            I&#39;ve worked as project manager and lead developer for&nbsp;
            <CustomLink href="https://www.github.com/FTCLib/FTCLib" text="FTCLib" color="#FFA500"/>
            &nbsp;and creator of&nbsp;
            <CustomLink href="http://www.jaxonfiles.com" text="The Jaxon Files" color="red"/>.
        </p>
    );
}