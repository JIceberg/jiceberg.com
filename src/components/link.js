import React from "react"
import { Link } from "gatsby"

export default function CustomLink(props) {
    return <Link to={props.href} style={{ color: '{props.color}', font: '300 14pt sans-serif', top: '0px' }}>{props.text}</Link>
}