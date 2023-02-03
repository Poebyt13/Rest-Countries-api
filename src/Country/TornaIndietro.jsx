
import React from 'react'
import arrowLeft from "../assets/arrow-left.svg";


function TornaIndietro({darkMode}) {

  return (
    <div className={darkMode == 1 ? "TornaIndietro TornaIndietroBlack" : "TornaIndietro"}>
      <div className='TornaIndietro__tasto'>
        <a className="EventoTornaIndietro" href="javascript: history.go(-1)">
          <img src={arrowLeft} alt="returnHome" />
          Back
        </a>
      </div>
    </div>
  )
}

export default TornaIndietro
