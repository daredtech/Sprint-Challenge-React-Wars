import React from 'react'
import Character from './Character'

const Cards = (props) => {
    return(
        <div className='cards'>
        {Array.from(props.charactersCollection).map((i, j) => {
            let name=i['name'];
            let birth_year=i['birth_year'];
            let eye_color=i['eye_color'];
            let gender=i['gender'];
            let hair_color=i['hair_color'];
            let skin_color=i['skin_color'];
            let height=i['height'];

            return <Character key={name} height={height} name={name} birth_year={birth_year} eye_color={eye_color} gender={gender} hair_color={hair_color} skin_color={skin_color}/>;})}
        </div>
    )
}

export default Cards

