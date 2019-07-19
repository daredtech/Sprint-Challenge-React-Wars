import React from 'react'
import {Card} from 'semantic-ui-react'
import CharacterCard from './Character'

const Cards = (props) => {
    console.log('CARDS ', props.charactersCollection)

    return(
        <div>
        {Array.from(props.charactersCollection).map((i, j) => {
            let name=i['name'];
            let birth_year=i['birth_year'];
            let eye_color=i['eye_color'];
            let gender=i['gender'];
            let hair_color=i['hair_color'];
            let skin_color=i['skin_color'];

            return <CharacterCard key={j} name={name} birth_year={birth_year} eye_color={eye_color} gender={gender} hair_color={hair_color} skin_color={skin_color}/>;})}
        </div>
    )
}

export default Cards





