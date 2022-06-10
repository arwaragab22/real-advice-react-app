
import './App.css';

import {useState} from 'react'
import axios from 'axios';

function App() { 
  const [adviceobj, setadvice] = useState();
  const gitadvice =()=> {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios.get("https://api.adviceslip.com/advice").then( (response) =>{
      // handle success
      console.log(response.data.slip.advice);
     
          setadvice(response.data.slip.advice);
      
    
    });
  }
  return (
    <div className="App">
      <div className="card">
        <h2>{adviceobj}</h2>
      
        <button className='button' onClick={gitadvice}> give me advice !</button>
        
</div>
    </div>
  );
}

export default App;
