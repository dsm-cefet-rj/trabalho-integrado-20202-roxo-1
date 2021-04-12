import React, {Fragment} from "react";
//import { useDispatch } from "react-redux";
import "../estilos/style.css";
import { ErrorMessage, Formik, Form as FF, Field } from "formik";
import mockSintoma from "../mocks/entS";
import mockAcidente from "../mocks/entAc";
import mockPtoAtd from "../mocks/entPA";
import mockAtd from "../mocks/entAt";
import schemaValid from "./yupValidCad";

function cadastrar(e) {
  console.log(e);
  //const dispatch = useDispatch();
}

const TESTE = (props) =>(
  <Formik initialValues={props.fvalores} onSubmit={cadastrar} validationSchema={props.fschema} >
      <FF className="Form-Cadastro">
        {props.flabels.map(item=>(
          <Fragment key={props.fent.concat("-" + item)}>
            <label>{item}: *</label>             
            <Field className="Form-Field" 
                type="text" 
                name={item.replaceAll('ç', 'c')}
                placeholder={props.fent.concat("-" + item)}
            />
            <ErrorMessage component="span" name={item.replaceAll('ç', 'c')} />
          </Fragment>))}          
          <input type="submit" value="Cadastrar" />
      </FF>
  </Formik>
);

function PrimaryForm(props) {
  let lista = [];
  
  switch (props.entidade) {
    case "Atendimento":
      return (
        <TESTE flabels={mockAtd} fent={props.entidade} fvalores={new Object()} fschema={schemaValid[3]} />
      );
    case "Acidente":
      lista = mockAcidente;
      return (
        <TESTE flabels={mockAcidente} fent={props.entidade} fvalores={new Object()} fschema={schemaValid[1]} />
      );
    case "Ponto de Atendimento":
      //alert("Apenas intituições de saúde podem cadastrar esta entidade.");
      if(confirm("Apenas intituições de saúde podem cadastrar esta entidade.")){
        lista = mockPtoAtd;
        return (
          <TESTE flabels={mockPtoAtd} fent={props.entidade} fvalores={new Object()} fschema={schemaValid[2]}/>
        );
      }else{
        console.log("Ação não permitida para esse Usuário!");
        return <></>;
      }
    case "Sintoma":
      lista = mockSintoma;
      return (
        <TESTE flabels={mockSintoma} fent={props.entidade} fvalores={new Object()} fschema={schemaValid[0]}/>
      );
    default:
      return <></>;
  }
}

export default PrimaryForm;
