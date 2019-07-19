import React, {useEffect, useState} from 'react';
import axios from "axios";

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charactersCollection, setCharactersCollection] = useState('');

  useEffect(() => {
    // to get a list of Star Wars characters 
    axios.get('https://swapi.co/api/people/')
    // to log the results if completed 
    .then(success => {
      console.log('request completed');
      console.log('data', success.data);
      console.log('results', success.data.results);
      // to set data to the state
      setCharactersCollection(success.data.results);
    })
    // to log the message if not completed 
    .catch(failure => {
      console.log('unable to complete the request');
    })
  }
    ,[]
  )

 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
