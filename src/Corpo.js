import obterParteDoCorpo from "./funcoes/obter-parte-corpo"

export default function Corpo(props){
  const imagem = obterParteDoCorpo(props.partesDoCorpo)
  return(
    <div className= "forca">
      <img src={imagem.img} alt={imagem.alt}/>
    </div>
  )

}