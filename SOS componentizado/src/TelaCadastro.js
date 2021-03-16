import React from 'react';
import './App.css';
import Button from './button';

function Conteudo() {
  const Entidades = ['', 'Acidente', 'Atendimento', 'Ponto de Atendimento', 'Sintoma'];

  return (
    <div className="flexible"> 
      <select onChange={e => console.log(e.target.value)} defaultValue={''}>
          {Entidades.map(f => (
            <option value={f} key={f}>{f}</option>
          ))}
      </select>
      <br/> <br/>
      <Button type="button" id="btn_cad" name="Cadastrar" />
    </div>
  );
}

export default Conteudo;