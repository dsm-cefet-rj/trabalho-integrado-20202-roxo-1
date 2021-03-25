import { createStore } from "redux";

const estadoInicial = {
  data: "now S",
  nome: "nome sintoma",
  descricao: { nome: "", valor: "" },
  subdescricao: { nome: "", valor: "" }
};
function sintoma(state = estadoInicial, action) {
  return state;
}

const store = createStore(sintoma);
export default store;
