import React, { useState } from "react";
import { Link } from "react-router-dom" 

const Navbar = (props) => {

    

    const [value, setValue] = useState("")

    

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.setSearch(value)

    }
    
    const handleChange = (event) => {
       

        setValue(event.target.value)
    }
    
    
    return (
        <nav style={{backgroundColor: "#FFF0000", padding: "20px"}}>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleChange} />
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <div style={{ float: "right"}}>
                <Link to="/about">Sobre nosotros</Link>
            </div>
        </nav>
        
    )
}

export default Navbar