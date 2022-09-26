export default function Button(props) {
  return (
    <button className="botoesAlfabeto" onClick={(event) => props.selecionarLetra(event, props.letter)}>
      {props.letter}
    </button>
  )
}