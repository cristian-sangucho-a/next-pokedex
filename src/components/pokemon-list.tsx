"use client"
import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemon-card";

type Pokemon = {
    name: string;
    url: string;
};

export  const PokemonList = () => {

  const [pokemons, setpokemons] = useState<Pokemon[]>([])
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=200&limit=220").then((response)=> 
      response.json().then((data) => {
        console.log(data)
        setpokemons(data.results)
      })
    )
    setloading(false)
  }, [])

    return (
      <>
      {loading? <p text-center>Cargando... </p>: 
        <div className="grid grid-cols-12 gap-4 mt-8">
        {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url}/>
        ))}
      </div>
      }
      
      </>
    )
}