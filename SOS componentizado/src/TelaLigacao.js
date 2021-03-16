import React from 'react';
import './App.css';

function ConteudoL() {
  return (<div className="flexible">
            <img alt="orientacão para ligacão" src="./orientacao-ligacao.PNG" width="95%"/> <br/>
            <button className="btn_ligar" id="btn_bombeiros" ><a href="tel:193">193</a></button>
            <button className="btn_ligar" id="btn_samu"><a href="tel:192">192</a></button>
          </div>
  );
}

export default ConteudoL;