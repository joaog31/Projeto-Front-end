// Seleciona todos os cards
const cards = document.querySelectorAll('.card-pessoa');

// Elementos que serão atualizados
const imagemPrincipal = document.querySelector('.container-fig img');
const descricao = document.querySelector('.descr');

// Dados dos personagens
const dados = {
  card1: {
    imagem: 'img/personagem1.jpg',
    texto: 'Descrição do personagem 1.'
  },
  card2: {
    imagem: 'img/personagem2.jpg',
    texto: 'Descrição do personagem 2.'
  },
  card3: {
    imagem: 'img/personagem3.jpg',
    texto: 'Descrição do personagem 3.'
  }
  // Adicione mais se necessário
};

// Adiciona evento de clique em cada card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove a classe de todos os cards
    cards.forEach(c => c.classList.remove('card-pessoa-select'));

    // Adiciona a classe somente ao card clicado
    card.classList.add('card-pessoa-select');

    // Atualiza imagem e descrição com base no id
    const id = card.id;
    imagemPrincipal.src = dados[id].imagem;
    descricao.textContent = dados[id].texto;
  });
});