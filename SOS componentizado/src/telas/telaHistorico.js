import React from "react";
import { useSelector } from "react-redux";

export default function() {
  const sintoma = useSelector(state => state.nome);

  return <p>{sintoma}</p>;
}
