import React, {useState, useEffect} from 'react'



import Landing from './components/Landing'
import Navbar from './components/Navbar/Navbar'
import Results from './components/Results/Results'

function App() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState()
    
    useEffect(() => {
      if(search !== "") {
        
        fetch(`https://api.mercadolivre.com/sites/MLA/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => setResults(data.results))

      }
    
      
    }, [search])
    
    
   
    
    return(
        <div>
            
              <Landing/> 
              <Navbar setSearch={setSearch}/>
              <Results results={results}/>
            


        </div>
    )
}

export default App