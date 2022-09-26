import { useState } from "react"
export default function Chutar(props){
  const [palavra, setPalavra]= useState ("")
  function modificarValorDaPalvra(event){
    const novaPalavra= event.target.value
    setPalavra(novaPalavra);
  }
  return(
    <div className="chutar">
      <p>Já sei a palavra!</p>
      <input onChange={(event)=>modificarValorDaPalvra(event)} className= "palavraChutada" type="texto"></input>
      <input onClick={()=>props.chutarPalavra(palavra)} className= "submit" type ="submit"></input>
    </div>
  )

  
}

