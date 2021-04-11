import React from "react";
import { useSelector } from "react-redux";

export default function() {
  const sintomas = useSelector(state => state.Sintomas);
  const atendimentos = useSelector(state => state.Atendimentos);

  return (
    <div className="flexible">
      <label>Meus Sintomas:</label>
      {sintomas.map(sintoma => (
        <li key={sintoma.id} className="list-group-item">
          {"[ ".concat(sintoma.data).concat(" ]") + " - " + sintoma.nome}:{" "}
          {sintoma.descricao}
        </li>
      ))}
      <label>Meus Atendimentos:</label>
      {atendimentos.map(atendimento => (
        <li key={atendimento.id} className="list-group-item">
          {"[ ".concat(atendimento.data).concat(" ]") +
            " - " +
            atendimento.ptoAtend +
            " - " +
            atendimento.profissionais.map(medico => medico.nome) +
            " - " +
            atendimento.medicamentos.map(remedio =>
              remedio.nome.concat(": ").concat(remedio.descricao)
            )}
        </li>
      ))}
    </div>
  );
}
