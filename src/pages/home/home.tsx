import { useState } from "react";

import { Filter, Hero, List } from "@/components";
import { IPokemon } from "@/helpers/interfaces";
import list from "@/assets/data.json";

const Home = () => {
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

export default Home;
