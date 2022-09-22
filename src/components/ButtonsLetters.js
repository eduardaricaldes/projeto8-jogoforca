import Button from "./Button"
import alfabeto from '../alfabeto'; 
export default function ButtonsLetters(props) {
  return (
    <div className="buttons-letters">
      {
        alfabeto.map((letter, index) => {
          return (
            <Button
              disabled
              key={index}
              letter={letter}
              selecionarLetra={props.selecionarLetra}
            />
          );
        })
      }
    </div>
  )

}