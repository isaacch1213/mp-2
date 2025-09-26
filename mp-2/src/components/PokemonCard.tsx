import styled from "styled-components";
import type { Pokemon, PokemonTypeInfo } from "../interfaces/Pokemon.ts"
import normal from "../assets/normal.png";
import fire from "../assets/fire.png";
import water from "../assets/water.png";
import electric from "../assets/electric.png";
import grass from "../assets/grass.png";
import ice from "../assets/ice.png";
import fighting from "../assets/fight.png";
import poison from "../assets/poison.png";
import ground from "../assets/ground.png";
import flying from "../assets/flying.png";
import psychic from "../assets/psychic.png";
import bug from "../assets/bug.png";
import rock from "../assets/rock.png";
import ghost from "../assets/ghost.png";
import dragon from "../assets/dragon.png";
import dark from "../assets/dark.png";
import steel from "../assets/steel.png";
import fairy from "../assets/fairy.png";

const PokemonWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2%;
`

const PokeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    width: 100%;
    border: solid 0.35vw;
    max-width: 30%;
    padding: 1%;
    margin-bottom: 2vh;
    background-color: #F04826;
`

const PokeIcon = styled.img`
    width: 30%;
`

const PokeImgWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
const PokeImg = styled.img`
    width: 80%;
    background-color: #CDFAFA;
    border: solid white 5px;
    box-shadow: inset 0 0 0 0.15vw black, 0 0 0 0.15vw black;
`

const PokeTitle = styled.h1`
    font-size: calc(2px + 3vw);
    color: black;
    margin: 0;
`

const PokeWeight = styled.p`
    font-size: calc(2px + 1.5vw);
`

export default function PokemonCard(props: {data: Pokemon[]}) {
    const typeIcons: Record<string, string> = {
        normal: normal,
        fire: fire,
        water: water,
        electric: electric,
        grass: grass,
        ice: ice,
        fighting: fighting,
        poison: poison,
        ground: ground,
        flying: flying,
        psychic: psychic,
        bug: bug,
        rock: rock,
        ghost: ghost,
        dragon: dragon,
        dark: dark,
        steel: steel,
        fairy: fairy,
      };

    return (
        <PokemonWrapper>
            {
                props.data.map((poke: Pokemon) => 
                    <PokeCard>
                        <PokeTitle>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</PokeTitle>
                        <PokeImg src={poke.front_default} alt={`Image of ${poke.name}`}/>
                        <PokeImgWrapper>
                            {
                                poke.types.map((type: string) =>
                                    <PokeIcon key={type} src={typeIcons[type]} alt={`Image of ${type}`}/>
                                )
                            }
                        </PokeImgWrapper>
                        <PokeWeight>{Math.round(((poke.weight / 10) * 2.20462) * 100) / 100} lbs</PokeWeight>
                    </PokeCard>
                )
            }
        </PokemonWrapper>
    );
}