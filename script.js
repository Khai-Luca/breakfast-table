const recipes = [
  {
    title: "Bolo de Cenoura",
    image: "images/05199d58baa3dcea3638812b8e7468b2.jpg",
    description: "Com cobertura de afeto e muito sabor.",
  },
  {
    title: "Croissant",
    image: "images/Italian croissants and breakfast in a bar - Juls' Kitchen.jpeg",
    description: "Camadas de leveza pra começar bem o dia.",
  },
  {
    title: "Dadinhos de Tapioca",
    image: "images/4c5b9948564c2e2c53716f88ed9eedda.jpg",
    description: "Crocantes por fora, macios por dentro, um clássico repaginado.",
  },
  {
    title: "Omelete",
    image: "images/Ham-and-Spinach-Omelet-3.jpg",
    description: "Rápida, leve e cheia de sabor no primeiro garfo.",
  },
  {
    title: "Panquecas Americanas",
    image: "images/6121475ad2cd6b630f97472625cd8b87.jpg",
    description: "Fofo, doce e perfeito pra dividir com quem você gosta."
  },
  {
    title: "Pão de Queijo",
    image: "images/622052-pao-de-queijo-assado-forn.jpg",
    description: "Quentinho, crocante e impossível de resistir.",
  },
  {
    title: "Ovos Mexidos",
    description: "Cremosos e rápidos de fazer, perfeitos para começar bem o dia.",
    image: "images/scrambled-eggs-e1488327364180.jpg",
  },
  {
    title: "Smoothie de Morango",
    description: "Bebida refrescante feita com morangos e iogurte natural.",
    image: "images/bigstock-Glass-Of-Fresh-Strawber.jpg",
  },
  {
    title: "Torrada com Abacate",
    description: "Torradas integrais com pasta de abacate, limão e temperos.",
    image: "images/Avocado-Toast-SpendWithPennies-1.jpg",
  },
  {
    title: "Waffles",
    description: "Waffles leves e crocantes para servir com frutas e mel.",
    image: "images/Waffle-Simples-e-crocante-1024x1.jpg",
  },
  {
    title: "Crepioca",
    description: "Uma receita leve e saudável feita com tapioca e ovo.",
    image: "images/crepioca.jpg",
  },
  {
    title: "Suco Detox Verde",
    description: "Uma bebida leve e desintoxicante feita com couve, limão e maçã.",
    image: "images/suco-verde-1.jpg",
   },
  {
    title: "Muffins de Chocolate",
    description: "Muffins macios e úmidos com gotas de chocolate.",
    image: "images/vegan-chocolate-muffins-11.jpg",
  },
  {
    title: "Chá Gelado com Limão",
    description: "Uma bebida refrescante de chá preto com rodelas de limão.",
    image: "images/cha-gelado_73312.jpg",
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
      <button type="button">Ver receita</button>
    `;
    cardsContainer.appendChild(card);
  });
}

renderRecipes();