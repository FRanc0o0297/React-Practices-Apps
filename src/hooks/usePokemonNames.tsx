import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}
interface PokemonProps {
  id: number;
}

export const usePokemonNames = ({ id }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isloading, setIsloading] = useState(true);

  const getPokemonbyId = async (id: number) => {
    setIsloading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    setPokemon({
      id: id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });

    setIsloading(false);
  };

  useEffect(() => {
    getPokemonbyId(id);
  }, [id]);

  return {
    //props
    isloading,
    pokemon,

    formattedId: id.toString().padStart(3, "0"),
  };
};
