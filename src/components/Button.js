export default function Button(props) {
  return (
    <button onClick={(event) => props.selecionarLetra(event, props.letter)}>
      {props.letter}
    </button>
  )
}