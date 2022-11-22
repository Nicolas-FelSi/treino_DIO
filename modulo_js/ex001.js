// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

function calcMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function resultadoFinal(mediaFinal) {
  if (mediaFinal < 5) {
    return "Reprovado";
  } else if (mediaFinal >= 5 && mediaFinal <= 7) {
    return "Recuperação";
  } else if (mediaFinal > 7) {
    return "Aprovado";
  } else {
    return "Algo deu errado nos cálculos.";
  }
}

const media = calcMedia(5, 6.5, 9);
console.log(media.toFixed(2));
console.log(resultadoFinal(media));
