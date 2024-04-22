var valorTotal = 0;
document.getElementById('lista-produtos').innerText = '';
document.getElementById('valor-total').innerText = 'R$ 0'
carrinho.innerHTML = '';

function adicionar() {
   
//recupera nome do produto,qtd e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcula o preço, o subtotal
    let calculoProduto = quantidade * valorProduto;

    let carrinho = document.getElementById('lista-produtos');
//add no carrin
    carrinho.innerHTML= carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${valorProduto}</span> </section>`;
//atualiza o valor total
   valorTotal = valorTotal + calculoProduto;
    let total = document.getElementById('valor-total');
    total.textContent= `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0
}



function limpar() {

document.getElementById('lista-produtos').innerText = '';
document.getElementById('valor-total').innerText = 'R$ 0'
carrinho.innerHTML = '';
document.getElementById('quantidade').value = 0

}

adicionar()