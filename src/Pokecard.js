import React from 'react'
import "./Pokecard.css"

const Pokecard = ({ key, name, type, baseExperience }) => {
    return (
        <div className='Pokecard'>
            <h3 className="Pokecard-name">{name}</h3>
            <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${key}.png`}></img>
            <h5 className='Pokecard-type'>Type: {type}</h5>
            <h5 className='Pokecard-exp'>EXP: {baseExperience}</h5>
        </div>
    )
}