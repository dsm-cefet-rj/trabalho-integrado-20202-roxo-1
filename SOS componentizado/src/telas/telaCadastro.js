import React from "react";
import "../estilos/style.css";
import mocks from "../mock";
import Button from "../componentes/button";

function cadastrar(selected) {
  console.log(selected);
}

function ConteudoC() {
  const Entidades = mocks[0].Entidades;

  return (
    <div className="flexible">
      <select onChange={e => cadastrar(e.target.value)} defaultValue={""}>
        {Entidades.map(ent => (
          <option value={ent} key={ent}>
            {ent}
          </option>
        ))}
      </select>
      <br /> <br />
      <Button type="button" id="btn_cad" name="Cadastrar" />
    </div>
  );
}

export default ConteudoC;
