import forcaInicio from '../assets/forca0.png';
import forcaCabeca from '../assets/forca1.png';
import forcaCorpo from '../assets/forca2.png';
import forcaBracoE from '../assets/forca3.png';
import forcaBracoD from '../assets/forca4.png';
import forcaPernaE from '../assets/forca5.png';
import forcaPernaD from '../assets/forca6.png';


export default function obterParteDoCorpo(valorDaParte){
  const arrayDePartes =[
    {
      parte:0,
      img:forcaInicio,
      alt: "forca inicio",
    },
    { 
      parte:1,
      img:forcaCabeca,
      alt: "forca cabeca",
    },
    {
      parte:2,
      img: forcaCorpo,
      alt: "forcaCorpo",
    },

    {
      parte:3,
      img: forcaBracoE,
      alt: "forcaBracoE",
    },
    {
      parte:4,
      img: forcaBracoD,
      alt: "forcaBracoD",
    },

    {
      parte:5,
      img: forcaPernaE ,
      alt: "forcaPernaE",
    },

    {
      parte:6,
      img: forcaPernaD,
      alt: "forcaPernaD",
    },
  ]

  for (let i=0; i< arrayDePartes.length;i++ ){

    if (arrayDePartes[i].parte === valorDaParte){
      return arrayDePartes[i]
    }  
  }

   return arrayDePartes[0];
}