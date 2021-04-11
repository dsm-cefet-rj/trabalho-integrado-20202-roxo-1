import { createStore } from "redux";
import TESTE from "../mocks/TESTE";

function reducerTree(state = TESTE, action) {
  let proxId = 0;
  switch (action.type) {
    case "SINTOMA_ADD":
      proxId =
        1 + state.Sintomas.map(s => s.id).reduce((x, y) => Math.max(x, y));
      console.log([{ ...action.newS, id: proxId }]);
      state.Sintomas.push(action.newS);
      return state.Sintomas;
    case "ATENDIMENTO_ADD":
      proxId =
        1 +
        state.Atendimentos.map(at => at.id).reduce((x, y) => Math.max(x, y));
      state.Atendimentos.push(action.newAt);
      return state.Atendimentos;
    case "ACIDENTE_ADD":
      proxId =
        1 + state.Acidentes.map(ac => ac.id).reduce((x, y) => Math.max(x, y));
      state.Acidentes.push(action.newAc);
      return state.Acidentes;
    case "PTO_ADD":
      proxId =
        1 +
        state.PontosAtendimento.map(p => p.id).reduce((x, y) => Math.max(x, y));
      state.PontosAtendimento.push(action.newPT);
      return state.PontosAtendimento;
    default:
      console.log(state);
      return state;
  }
}

const store = createStore(reducerTree);
// store.dispatch({
//   type: "SINTOMA_ADD",
//   newS: {
//     data: "datetime",
//     nome: "TESTE",
//     descricao: "teste"
//   }
// });

//console.log(store.getState());
export default store;
