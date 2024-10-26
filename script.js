let totalCarrinho = 0;
let taxaEntrega = 5.00;

function adicionarAoCarrinho(nome, preco) {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalDisplay = document.getElementById('total');
    const totalFinalDisplay = document.getElementById('total-final');
    
    // Verificar se o item já existe no carrinho
    let itemExistente = Array.from(itensCarrinho.children).find(item => item.dataset.nome === nome);
    if (itemExistente) {
        alert("Item já está no carrinho!");
        return;
    }
    
    // Criar novo item do carrinho
    const item = document.createElement('li');
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    item.dataset.nome = nome; // Adicionar data-attribute para rastrear o item
    item.addEventListener('click', () => removerDoCarrinho(item, preco)); // Adicionar evento de remoção ao item
    itensCarrinho.appendChild(item);
    
    // Atualizar total
    totalCarrinho += preco;
    totalDisplay.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    totalFinalDisplay.textContent = `Total com Entrega: R$ ${(totalCarrinho + taxaEntrega).toFixed(2)}`;
}

function removerDoCarrinho(item, preco) {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalDisplay = document.getElementById('total');
    const totalFinalDisplay = document.getElementById('total-final');
    
    // Remover item do carrinho
    itensCarrinho.removeChild(item);
    
    // Atualizar total
    totalCarrinho -= preco;
    totalDisplay.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    totalFinalDisplay.textContent = `Total com Entrega: R$ ${(totalCarrinho + taxaEntrega).toFixed(2)}`;
}

function adicionarMolhoExtra(nome, preco) {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalDisplay = document.getElementById('total');
    const totalFinalDisplay = document.getElementById('total-final');
    
    const item = document.createElement('li');
    item.textContent = `Molho Extra - R$ ${preco.toFixed(2)} (${nome})`;
    item.dataset.nome = `Molho Extra (${nome})`;
    item.addEventListener('click', () => removerDoCarrinho(item, preco));
    itensCarrinho.appendChild(item);
    
    totalCarrinho += preco;
    totalDisplay.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    totalFinalDisplay.textContent = `Total com Entrega: R$ ${(totalCarrinho + taxaEntrega).toFixed(2)}`;
}

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = event.target.querySelector('input[placeholder="Seu Nome"]').value;
    const email = event.target.querySelector('input[placeholder="Seu Email"]').value;
    const mensagem = event.target.querySelector('textarea[placeholder="Sua Mensagem"]').value;
    
    const whatsappUrl = `https://wa.me/5543984390754?text=Ol%C3%A1%20vim%20pelo%20cardapio=${encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`)}`;
    window.location.href = whatsappUrl;
});

function atualizarStatus() {
    const agora = new Date();
    const hora = agora.getHours();
    const aberto = document.getElementById('aberto');
    const fechado = document.getElementById('fechado');
    
    if (hora >= 19 || hora < 1) {
        aberto.style.display = 'inline';
        fechado.style.display = 'none';
    } else {
        aberto.style.display = 'none';
        fechado.style.display = 'inline';
    }
}

// Atualizar status de aberto/fechado ao carregar a página
atualizarStatus();
