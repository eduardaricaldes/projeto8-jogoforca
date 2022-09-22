export default function buscarIndices(letra, palavra) {
  const indexes = [];

  for (let index = 0; index < palavra.length; index++) {
    if (palavra[index] === letra) {
      indexes.push(index);
    }
  }

  return indexes
}