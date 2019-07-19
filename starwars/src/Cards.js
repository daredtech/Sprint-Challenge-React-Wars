import React from 'react'
import {Card} from 'semantic-ui-react'
import CharacterCard from './CharacterCard'

const Cards = (props) => {
    console.log('CARDS ', props.charactersCollection)
    return(
        <Card.Group>
        <CharacterCard/>
   
  </Card.Group>

    );

}
  


export default Cards





