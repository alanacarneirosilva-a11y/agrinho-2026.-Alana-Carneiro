// Seleciona o botão e o parágrafo
const button = document.getElementById('highlight-btn');
const text = document.getElementById('essay-text');

// Lista de palavras-chave para destacar
const keywords = [
    "agricultura", "meio ambiente", "desmatamento", 
    "pecuária", "ecossistemas", "tecnologia", "futuras gerações"
];

// Função para destacar palavras-chave
button.addEventListener('click', () => {
    let content = text.innerHTML;

    keywords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        content = content.replace(regex, '<span class="highlight">$1</span>');
    });

    text.innerHTML = content;
});