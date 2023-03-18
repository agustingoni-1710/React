import React from "react"
import { link } from "react-router-dom"

const Landing = () => {
    return (
        <div style={{textAlign: "center"}}>
            <link to="/">
                <img src="/public/img/logo.png" alt="logo" />
            </link>
            <h1>Bienvenidos a MDQCaps</h1>
            <p>Buscador de Productos</p>
        </div>
    )
}

export default Landing