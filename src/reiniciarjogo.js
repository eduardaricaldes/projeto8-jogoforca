export default function ReiniciarJogo(){
    function funcao (){
     window.location.reload()
  }
  return(
    <div className="botao">
    <button onClick={funcao} className="reiniciar">Escolher palavra</button>
    </div>
  )

}