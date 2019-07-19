import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cards from './Cards'
import './App.css';

const App = () => {

  const [charactersCollection, setCharactersCollection] = useState('');

  useEffect(() => {
    // to get a list of Star Wars characters 
    // axios.get('https://swapi.co/api/people/')
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
    
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
      <h1 className="Header">Star Wars Characters </h1>
      <Cards charactersCollection={charactersCollection} />

    </div>
  );
}

export default App;


