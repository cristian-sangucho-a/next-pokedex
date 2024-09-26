"use client"
import { useEffect, useState } from "react"

/* eslint-disable @next/next/no-img-element */
type SinglePokemonProps = {
    pokemonId: string
}

type SinglePokemon = {
    name: string
    weight: number
    height: number

}

export function SinglePokemon({pokemonId}: SinglePokemonProps) {
    const [pokemon, setPokemon] = useState<SinglePokemon>(
        {
        name: "",
        weight:0,
        height:0,
        }
    )
    useEffect(
        ()=>{
            const fetchSinglePokemon = async() => {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
                )
                const data = await response.json()
                setPokemon(data)
                console.log(data)
            }
            fetchSinglePokemon();
        }, [pokemonId])

    return (
        <div className="card border bg-base-100 shadow-xl col-span-4">
            
            <figure>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                    alt={pokemon.name}
                    width={200}
                    height={200}
                    className="size-[200px]"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h2>
                <p>Pokemon ID: {pokemonId}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
                <div className="card-actions justify-end"></div>
            </div>
            
        </div>
    )

}