import { SinglePokemon } from "@/components/single-pokemon";

type RouteParams = {
    params: Params
}

type Params = {
    pokemonId: string
}

export default function PokemonPage({params}: RouteParams) {
    console.log(params.pokemonId)
    return (
        <div className="container flex flex-col justify-center h-screen">
            <SinglePokemon pokemonId={params.pokemonId}/>
        </div>
    )
}