import React from "react"
import { Link } from "react-router-dom"


const Landing = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Link>
                <img src="/public/img/logo.png" alt="logo" style={{ height: "50px"}} />
            </Link>
            <h1>Bienvenidos a MDQCaps</h1>
            <p>Buscador de Productos</p>
        </div>
    )
}

export default Landing