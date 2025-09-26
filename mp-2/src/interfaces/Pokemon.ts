export interface PokemonTypeInfo {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }

export interface Pokemon {
    name: string;
    front_default: string;
    types: string[];
    weight: number;
}