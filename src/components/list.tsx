import { FC } from "react";

import { Card, Container } from ".";
import { IPokemon } from "@/helpers/interfaces";

interface ListProps {
  pokemons: IPokemon[];
  updatePokemons: (pokemons: IPokemon[]) => void;
}

const List: FC<ListProps> = ({ pokemons }) => {
  return (
    <section>
      <Container className="flex gap-3 justify-center flex-wrap">
        {pokemons.map(pokemon => (
          <Card {...pokemon} key={pokemon.id} />
        ))}
      </Container>
    </section>
  );
};

export default List;
