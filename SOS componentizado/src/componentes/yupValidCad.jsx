import * as yup from "yup";
import { ptForm } from "yup-locale-pt";

yup.setLocale(ptForm); //validacoes em portugues!

const schemaTeste = [
  yup.object().shape({  //modelo Sintoma
    data: yup.date().max(new Date()).required(),
    nome: yup.string().required(),
    descricao: yup.string().required()
  }),
  yup.object().shape({  //modelo Acidente
    data: yup.date().max(new Date()).required(),
    estado: yup.string().length(2).required(),
    cidade: yup.string().required(),
    bairro: yup.string().required()
  }),
  yup.object().shape({  //modelo Pto Atend
    nome: yup.string().required(),
    estado: yup.string().length(2).required(),
    cidade: yup.string().required(),
    bairro: yup.string().required(),
    endereco: yup.string().required()
  }), 
  yup.object().shape({  //modelo Atendimento
    data: yup.date().max(new Date()).required(),
    pontoAtend: yup.string().required(),
    profissionais: yup.string(),
    medicamentos: yup.object().nullable()
  })
]

export default schemaTeste;