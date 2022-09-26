import { useEffect, useState } from "react";
import ButtonsLetters from "./components/ButtonsLetters";
import JogoPalavra from './JogoPalavra';
import obterPalavra from './funcoes/obter-palavra';
import quebrarPalavra from './funcoes/quebrar-palavra';
import buscarIndices from './funcoes/buscar-indices';
import palavras from './palavras';
import Corpo from './Corpo';
import Chutar from './Chutar';
import ReiniciarJogo from "./reiniciarjogo";
import obterTodosOsIndices from "./funcoes/retornar-indices";

export default function Layout (){
  const [palavra, setPalavra] = useState([]);
  const [indicesPalavraSelecionada, setIndices] = useState([])
  const [partesDoCorpo, setParteDoCorpo] = useState(0)
  const [palavraDoJogo, setPalavraDoJogo] = useState("")
  const [chutouCerto, setChutouCerto] = useState(false)

  useEffect(() => {
    const palavraRandomica = obterPalavra(palavras);
    console.log (palavraRandomica)
    setPalavraDoJogo(palavraRandomica)
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

  function chutarPalavra(palavraRecebida){
    if(palavraRecebida===palavraDoJogo){
      const indices= obterTodosOsIndices(palavra);
      setChutouCerto(true)
      setIndices(indices);
    }else {
      setParteDoCorpo(6);
    }
  }


  return (
    <div>
      <ReiniciarJogo/>
      <Corpo partesDoCorpo={partesDoCorpo}/>
      <JogoPalavra palavraEmArray={palavra} chutouCerto={chutouCerto} indices={indicesPalavraSelecionada}/>
      <ButtonsLetters selecionarLetra={selecionarLetra}/>
      <Chutar chutarPalavra={chutarPalavra}/>
    </div>
  )

}