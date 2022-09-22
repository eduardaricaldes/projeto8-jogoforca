export default function obterPalavra(listaDePalavras) {
  const indice = Math.floor(Math.random() * listaDePalavras.length);
  return listaDePalavras[indice];
}