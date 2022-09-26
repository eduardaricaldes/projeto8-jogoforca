export default function JogoPalavra(props) {

  if(props.chutouCerto) {
    return (
      <div className="jogoPalavra">
      {
      props.palavraEmArray.map((letra, index) => {
        return (
          <span key={index} className='letra letraCerto'> {letra} </span>
        )
      })}
    </div>
    )
  }else{
    return(
      <div className="jogoPalavra">
        {
        props.palavraEmArray.map((letra, index) => {
          if(props.indices.length > 0) {
            let letraOuUnderline = "_";
            const indexParaModificar = props.indices.indexOf(index);
            if(indexParaModificar > -1) {
              letraOuUnderline = letra;
            }
          
            return (
              <span key={index} className='letra'> {letraOuUnderline} </span>
            )
          }else{
            return (
              <span key={index} className="letra"> _ </span>
            )
          }
        })}
      </div>
    );
  }
}