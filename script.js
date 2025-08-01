const recipes = [
  {
    title: "Bolo de Cenoura",
    image: "images/135505514-bolo-de-cenoura-molhad.jpg",
    description: "Com cobertura de afeto e muito sabor.",
    link: "receitas/bolo-de-cenoura.html"
  },
  {
    title: "Croissant",
    image: "images/croissant.jpeg",
    description: "Camadas de leveza pra começar bem o dia.",
    link: "receitas/croissant.html"
  },
  {
    title: "Dadinhos de Tapioca",
    image: "images/4c5b9948564c2e2c53716f88ed9eedda.jpg",
    description: "Crocantes por fora e macios por dentro.",
    link: "receitas/dadinhos-de-tapioca.html"
  },
  {
    title: "Omelete",
    image: "images/Ham-and-Spinach-Omelet-3.jpg",
    description: "Rápida, leve e cheia de sabor no primeiro garfo.",
    link: "receitas/omelete.html"
  },
  {
    title: "Panquecas Americanas",
    image: "images/fluffyamericanpancak_74828_16x9.jpg",
    description: "Fofo, doce e perfeito pra dividir com quem você gosta.",
    link: "receitas/panquecas-americanas.html"
  },
  {
    title: "Pão de Queijo",
    image: "images/622052-pao-de-queijo-assado-forn.jpg",
    description: "Quentinho, crocante e impossível de resistir.",
    link: "receitas/pao-de-queijo.html"
  },
  {
    title: "Ovos Mexidos",
    description: "Cremosos e rápidos de fazer, perfeitos para começar o dia.",
    image: "images/scrambled-eggs-e1488327364180.jpg",
    link: "receitas/ovos-mexidos.html"
  },
  {
    title: "Smoothie de Morango",
    description: "Bebida refrescante feita com morangos e iogurte natural.",
    image: "images/bigstock-Glass-Of-Fresh-Strawber.jpg",
    link: "receitas/smoothie-de-morango.html"
  },
  {
    title: "Avocado Toast",
    description: "Torradas integrais com pasta de abacate, limão e temperos.",
    image: "images/Avocado-Toast-SpendWithPennies-1.jpg",
    link: "receitas/avocado-toast.html"
  },
  {
    title: "Waffles",
    description: "Waffles leves e crocantes para servir com frutas e mel.",
    image: "images/Waffle-Simples-e-crocante-1024x1.jpg",
    link: "receitas/waffles.html"
  },
  {
    title: "Crepioca",
    description: "Uma receita leve e saudável feita com tapioca e ovo.",
    image: "images/crepioca.jpg",
    link: "receitas/crepioca.html"
  },
  {
    title: "Suco Detox Verde",
    description: "Uma bebida leve e desintoxicante pra sua manhâ.",
    image: "images/suco-verde-1.jpg",
    link: "receitas/suco-detox-verde.html"
   },
  {
    title: "Muffins de Chocolate",
    description: "Muffins macios e úmidos com gotas de chocolate.",
    image: "images/vegan-chocolate-muffins-11.jpg",
    link: "receitas/muffins-de-chocolate.html"
  },
  {
    title: "Chá Gelado com Limão",
    description: "Uma bebida refrescante de chá preto com limão.",
    image: "images/cha-gelado_73312.jpg",
    link: "receitas/cha-gelado-com-limao.html"
  }
];

const cardsContainer = document.getElementById("cards");

function renderRecipes(limit = recipes.length) {
  cardsContainer.innerHTML = "";
  recipes.slice(0, limit).forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("receita");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
      <a href="${recipe.link}" class="btn-receita">Ver receita</a>
    `;
    cardsContainer.appendChild(card);
  });
}

renderRecipes();