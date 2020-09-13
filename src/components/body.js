import React from "react"
import CustomLink from "../components/link"
import resume from "../images/resume.png"

export default function Body() {
    return (
        <p style={{ color: 'black', font: '400 15pt sans-serif', top: '0px' }}>
            My name is Jackson Isenberg, and I&#39;m a computer science major
            from the <CustomLink href="/" text="Georgia Institute of Technology" color="gold" />.
            <br />
            Here is my resume:
            <br />
            <a href={resume} download="jaxon-resume.png">
                <img src={resume} />
            </a>.
        </p>
    );
}