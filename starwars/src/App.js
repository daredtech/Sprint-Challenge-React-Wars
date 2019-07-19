import React, {useEffect, useState} from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard'
import Cards from './Cards'

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
    // axios.get('https://swapi.co/api/people/')
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
    
    // to log the results if completed 
    .then(success => {
      console.log('request completed');
      console.log('data', success.data);
      console.log('results', success.data.results);
      // to set data to the state
      // setCharactersCollection(success.data.results[0]);
      setCharactersCollection(success.data.results);
    })
    // to log the message if not completed 
    .catch(failure => {
      console.log('unable to complete the request');
    })
  }
    ,[]
  )

  // console.log('first object: ', charactersCollection);
  // console.log('first object name: ', charactersCollection['name']);
  // const name=charactersCollection['name'];
  // const hair_color=charactersCollection['hair_color'];
  // let homeworld=charactersCollection['homeworld'];

  // if (homeworld=== "https://swapi.co/api/planets/1/") {homeworld='Tatooine'}
  // console.log('homeworld: ', homeworld);

    // console.log('printing characters collection: ', charactersCollection);
    // console.log('first object: ', charactersCollection[0]);
    // let test = charactersCollection[0];
    // if(test!== undefined){
    //   console.log('name: ', test['number']);
    // }
    
    // console.log('printing characters collection: ', charactersCollection);
    // console.log('printing characters collection: ', charactersCollection);
    // console.log('printing characters collection: ', charactersCollection);
    // console.log('printing characters collection: ', charactersCollection);
    // console.log('printing characters collection: ', charactersCollection);

    // charactersCollection.forEach()

 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cards charactersCollection={charactersCollection} />
      {/* <CharacterCard name={name} hair_color={hair_color} homeworld={homeworld}/> */}
    </div>
  );
}

export default App;
