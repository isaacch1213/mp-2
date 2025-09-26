export interface PokemonNameUrl {
    name: string;
    url: string;
}

export interface PokemonTypeInfo {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }

export interface Pokemon {
    id: number;
    name: string;
    front_default: string;
    types: string[];
    weight: number;
}
