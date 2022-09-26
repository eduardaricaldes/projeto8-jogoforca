export default function obterTodosOsIndices (palavraQuebrada){
  const indices = []
  for (let i=0; i<palavraQuebrada.length; i++){
    indices.push(i)

  }
  return indices;
}