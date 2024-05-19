import { FC } from "react";

import { IPokemon } from "@/helpers/interfaces";

const Card: FC<IPokemon> = pokemon => {
  return (
    <div className="max-w-[300px] w-full border-2 border-white rounded-2xl">
      <div className="flex justify-center items-center border-b-2">
        <img className="max-w-[80%] w-full aspect-square h-auto" src={pokemon?.img} alt={pokemon?.name} />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3>{pokemon?.name}</h3>
        <p>{pokemon?.type}</p>
        <p>{pokemon?.weaknesses.join(", ")}</p>
        <div className="flex gap-6">
          <p>{pokemon?.weight}</p>
          <p>{pokemon?.height}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
