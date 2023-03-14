import React, { useState } from "react";

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
        </nav>
        
    )
}

export default Navbar