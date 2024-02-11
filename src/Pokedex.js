import React from 'react'
import "./Pokedex.css"
import Pokecard from './Pokecard'
import listPokemon from "./listPokemon"

const Pokedex = () => {
    return (
        <>
            <h3 className="Pokedex-title">Pokedex</h3>
            <div>
                {listPokemon.map(p => (
                    <Pokedex key={p.id} name={p.name} type={p.type} baseExperience={p.base_experience} />
                ))}
            </div>
        </>
    )
}

export default Pokedex