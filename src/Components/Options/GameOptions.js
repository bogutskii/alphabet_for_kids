import React from 'react';
import ControlCase from "./ControlCase";
import LanguageSelector from "./LanguageSelector";
import './options.css'
const GameOptions = ({showCase=true, showLangSelector=true}) => {
  return <div className='app-options'>
    {showCase && <ControlCase />}
    {showLangSelector && <LanguageSelector />}
    </div>
};

export default GameOptions;