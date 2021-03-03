//ELEMENTOS:
var flexible_div = document.getElementById("flexible");
var btnSamu = document.getElementById("btn_samu");
var btnBombeiros = document.getElementById("btn_bombeiros");
var menu = document.getElementById("menu");
var cadSelecao = document.getElementById("selecao-entidade");
var imagens = document.getElementsByTagName("img");

const Entidades = {
  ACIDENTE: "Acidente",
  ATENDIMENTO: "Atendimento",
  PTATDM: "Ponto de Atendimento",
  SINTOMA: "Sintoma"
}

function setHidden(elemento, status) {
  try{
    elemento.hidden = status;
  }catch(e){
    console.log(e);
  }
}
