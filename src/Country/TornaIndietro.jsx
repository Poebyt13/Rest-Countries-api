
import React from 'react'

function TornaIndietro({darkMode}) {

  return (
    <div className={darkMode == 1 ? "TornaIndietro TornaIndietroBlack" : "TornaIndietro"}>
      <div className='TornaIndietro__tasto'>
        <a className="EventoTornaIndietro" href="javascript: history.go(-1)">
          <img src="src\assets\arrow-back-outline.svg" alt="arrow" />
          Back
        </a>
      </div>
    </div>
  )
}

export default TornaIndietro
