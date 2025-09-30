import { useState, useEffect } from "react";
import type {
  PokemonNameUrl,
  Pokemon,
  PokemonTypeInfo,
} from "./interfaces/Pokemon.ts";
import PokemonCard from "./components/PokemonCard.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const data = await res.json();

      const pokemonDetails: Pokemon[] = await Promise.all(
        data.results.map(async (pokemon: PokemonNameUrl) => {
          const res = await fetch(pokemon.url);
          if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
          }
          const detail = await res.json();
          return {
            id: detail.id,
            name: pokemon.name,
            front_default: detail.sprites.front_default,
            types: detail.types.map((t: PokemonTypeInfo) => t.type.name),
            weight: detail.weight,
          };
        }),
      );

      setData(pokemonDetails);
    }

    fetchData()
      .then(() => console.log("Data fetched sucessfully"))
      .catch((e: Error) => console.log("There was an error:", e.message));
  }, []);

  return (
    <>
      <Wrapper>
        <PokemonCard data={data} />
      </Wrapper>
    </>
  );
}
