import { FC, useState } from "react";

import { IPokemon } from "@/helpers/interfaces";
import list from "@/assets/data.json";

import { Filter, Hero, List } from ".";

const App: FC = () => {
  const [pokemons, setPokemons] = useState(list);

  const updatePokemons = (pokemons: IPokemon[]) => setPokemons(pokemons);

  return (
    <>
      <main>
        <Filter />
        <Hero />
        <List pokemons={pokemons} updatePokemons={updatePokemons} />
      </main>
    </>
  );
};

export default App;
