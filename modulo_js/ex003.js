// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function aplicarDesconto(precoProduto, desconto) {
  return precoProduto - precoProduto * (desconto / 100);
}

function duasVezes(precoProduto) {
  return precoProduto;
}

function acimaDuasVezes(precoProduto, juros) {
  return precoProduto + precoProduto * (juros / 100);
}

function pagamento(formaDePagamento) {
  if (formaDePagamento === 1) {
    return console.log(
      `Forma de pagamento(Debito) - Pagamento: R$${aplicarDesconto(
        precoProdutoReais, 10
      )}`
    );
  } else if (formaDePagamento === 2) {
    return console.log(
      `Forma de pagamento(Dinheiro ou pix) - Pagamento: R$${aplicarDesconto(
        precoProdutoReais, 15
      )}`
    );
  } else if (formaDePagamento === 3) {
    return console.log(
      `Forma de pagamento(Duas vezes) - Pagamento: R$${duasVezes(
        precoProdutoReais
      )}`
    );
  } else if (formaDePagamento === 4) {
    return console.log(
      `Forma de pagamento(Acima de duas vezes) - Pagamento: R$${acimaDuasVezes(
        precoProdutoReais, 10
      )}`
    );
  } else {
    return "Escolha inválida.";
  }
}

const precoProdutoReais = 100;
const escolha = 2;
console.log(`Valor do produto: ${precoProdutoReais}`);
pagamento(escolha);
