import { ReactNode } from "react";

export type IChildren = Readonly<{ children: ReactNode }>;

export interface IPokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  egg: string;
  weaknesses: string[];
  prev_evolution?: NextEvolution[];
  next_evolution?: NextEvolution[];
}

export interface NextEvolution {
  num: string;
  name: string;
}
