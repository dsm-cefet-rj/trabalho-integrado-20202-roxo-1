const Constantes = [
  {
    Entidades: [
      "",
      "Acidente",
      "Atendimento",
      "Ponto de Atendimento",
      "Sintoma"
    ]
  },
  {
    Acidentes: [
      {
        data: "",
        descricao: "",
        estado: "",
        cidade: "",
        bairro: ""
      }
    ]
  },
  {
    PontosAtendimento: [
      {
        nome: "",
        estado: "",
        cidade: "",
        bairro: "",
        endereco: ""
      }
    ]
  },
  {
    Sintomas: [
      {
        data: "",
        nome: "",
        descricao: { nome: "", valor: "" },
        subdescricao: { nome: "", valor: "" }
      }
    ]
  },
  {
    Atendimentos: [
      {
        data: "",
        ptoAtend: "",
        sintomas: [],
        profissionais: []
      }
    ]
  }
];

export default Constantes;
