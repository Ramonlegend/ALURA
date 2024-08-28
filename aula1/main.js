let listaDeItens = [];

const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  salvarItens();
});

function salvarItens() {
  const comprasItens = itensInput.value;
  const checkDuplicado = listaDeItens.some(
    (elemento) => elemento.valor.toUpperCase() === comprasItens.toUpperCase(),
  );

  if (checkDuplicado) {
    alert('Item já adicionado!');
  } else {
    listaDeItens.push({
      valor: comprasItens,
    });
  }

  listaDeItens.push({
    valor: comprasItens,
  });

  console.log(listaDeItens);
}
