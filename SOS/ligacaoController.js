function chamar() {
  console.log("cliquei.");
  mostraCadastro(false);
  mostraOrientacaoLigacao(true);
  setHidden(imagens.item(0), false);
  setHidden(btnSamu, false);
  setHidden(btnBombeiros, false);
}

function chamaBombeiros() {
  console.log("ligando bombeiros...");
  setHidden(btnSamu, true);
  setHidden(btnBombeiros, true);
}

function chamaSamu() {
  console.log("ligando samu...");
  setHidden(btnSamu, true);
  setHidden(btnBombeiros, true);
}

function mostraOrientacaoLigacao(arg) {
  if(arg != true && arg != false) {
    setHidden(document.getElementById("Telaligacao"), false);
  }else{
    setHidden(document.getElementById("Telaligacao"), !arg);
  }
}