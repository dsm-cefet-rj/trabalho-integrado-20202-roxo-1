function cadastrar() {
  switch(cadSelecao.value) {
    case Entidades.ACIDENTE:
      console.log(cadSelecao.value);
      break;
    case Entidades.ATENDIMENTO:
      console.log(cadSelecao.value);
      break;
    case Entidades.PTATDM:
      console.log(cadSelecao.value);
      break;
    case Entidades.SINTOMA:
      console.log(cadSelecao.value);
      break;
    default:
      console.log("selecione uma opção para cadastro!");
  }
}

function mostraCadastro(arg) {
  mostraOrientacaoLigacao(false);
  if(arg != true && arg != false) {
    setHidden(document.getElementById("Telacadastro"), false);
  }else{
    setHidden(document.getElementById("Telacadastro"), !arg);
  }
}
