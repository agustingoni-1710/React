import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"

const Landing = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Link to="/">
                <img src={logo} alt="logo" style={{ height: "100px"}} />
            </Link>
            <h1>Bienvenidos a MDQCaps</h1>
            <p>Buscador de Productos</p>
        </div>
    )
}

export default Landing