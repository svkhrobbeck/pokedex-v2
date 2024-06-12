import { Navigate, useParams } from "react-router-dom";

import list from "@/assets/data.json";
import { Container } from "@/components";

const Pokemon = () => {
  const { id } = useParams<{ id: string }>();

  const pokemon = list.find(pokemon => pokemon.id === Number(id));

  if (!pokemon) return <Navigate to="/" />;

  console.log(pokemon);

  return (
    <main>
      <Container type="mini">
        <img className="max-w-[400px] mx-auto w-full h-auto" src={pokemon.img} alt={pokemon.name} />
      </Container>
    </main>
  );
};

export default Pokemon;
