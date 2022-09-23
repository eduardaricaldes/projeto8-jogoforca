import { useEffect, useState } from "react";
import ButtonsLetters from "./components/ButtonsLetters";
import JogoPalavra from './JogoPalavra';
import obterPalavra from './funcoes/obter-palavra';
import quebrarPalavra from './funcoes/quebrar-palavra';
import buscarIndices from './funcoes/buscar-indices';
import palavras from './palavras';
import Corpo from './Corpo';
import Chutar from './Chutar';

export default function Layout (){
  const [palavra, setPalavra] = useState([]);
  const [indicesPalavraSelecionada, setIndices] = useState([])
  const [partesDoCorpo, setParteDoCorpo] = useState(0)

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
      const valorDaParte = partesDoCorpo+1
      setParteDoCorpo(valorDaParte)
    }else {
      const indices = indicesPalavraSelecionada.concat(arrayDeIndices)
      setIndices(indices);
    }
  }


  return (
    <div>
      <Corpo partesDoCorpo={partesDoCorpo}/>
      <JogoPalavra palavraEmArray={palavra} indices={indicesPalavraSelecionada}/>
      <ButtonsLetters selecionarLetra={selecionarLetra}/>
      <Chutar/>
    </div>
  )

}