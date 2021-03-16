import React from 'react';
import './App.css';
import Button from './button';

const Footer = () => (<div>
      <br/><br/>
      <footer className="fixed">
        <Button type="button" className="btn_ligar" name="LIGAR"/>

        {/*  <button className="btn_ligar" onClick={() => console.log("cliquei.")}>
                <i className="glyphicon glyphicon-phone"></i>
             LIGAR</button>
        */}
      </footer>
    </div>
);

export default Footer;