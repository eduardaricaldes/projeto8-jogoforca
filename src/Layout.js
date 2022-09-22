import { useEffect, useState } from "react";
import ButtonsLetters from "./components/ButtonsLetters";
import JogoPalavra from './JogoPalavra';
import Corpo from "./Corpo";
import obterPalavra from './funcoes/obter-palavra';
import quebrarPalavra from './funcoes/quebrar-palavra';
import buscarIndices from './funcoes/buscar-indices';

import palavras from './palavras';

export default function Layout (){
  const [palavra, setPalavra] = useState([]);
  const [indicesPalavraSelecionada, setIndices] = useState([])

  useEffect(() => {
    const palavraRandomica = obterPalavra(palavras);
    const palavraQuebrada = quebrarPalavra(palavraRandomica);
    setPalavra(palavraQuebrada)
  }, [])

  function selecionarLetra(event, letra) {
    const button = event.target
    button.disabled = true;

    const arrayDeIndices = buscarIndices(letra, palavra)
    if(arrayDeIndices.length === 0) {
      console.log("Mostra uma parte do corpo")
    }else {
      const indices = indicesPalavraSelecionada.concat(arrayDeIndices)
      setIndices(indices)
    }
  }


  return (
    <div>
      <JogoPalavra palavraEmArray={palavra} indices={indicesPalavraSelecionada}/>
      <ButtonsLetters selecionarLetra={selecionarLetra}/>
      <Corpo/>{/* COMPONENT PARTES DO CORPO */}
    </div>
  )

}