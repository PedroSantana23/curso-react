import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!useContext) {
    console.log("Contexto não encontrado!");
  }

  return context;
};
