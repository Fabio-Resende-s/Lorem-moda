// Lista de produtos
const produtos = [
  {
    id: 1,
    nome: "Camisa Social",
    preco: 79.90,
    imagem: "https://images.unsplash.com/photo-1602810313321-16bbba4c5f5b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    nome: "Vestido Floral",
    preco: 119.00,
    imagem: "https://images.unsplash.com/photo-1556909212-6c9fbbc0f4c1?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    nome: "Jaqueta Jeans",
    preco: 149.90,
    imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    nome: "Calça Jeans",
    preco: 99.90,
    imagem: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=500&q=80"
  }
];

// Renderiza produtos na tela
function exibirProdutos(lista) {
  const container = document.getElementById('lista-produtos');
  if (!container) return;
  container.innerHTML = '';

  lista.forEach(produto => {
    container.innerHTML += `
      <div class="produto">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
        <br><br>
        <a href="produto.html?id=${produto.id}">Ver detalhes</a>
      </div>
    `;
  });
}

exibirProdutos(produtos);

// Busca
document.getElementById('busca')?.addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
  exibirProdutos(filtrados);
});

// Carrinho
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert('Produto adicionado ao carrinho!');
}
