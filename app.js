const categories = [
  ["Todos", "Todos"],
  ["Brigadeiros", "Brigadeiros e Chocolates"],
  ["Bolos", "Bolos"],
  ["Pudins", "Pudins e Gelatinas"],
  ["Mousses", "Mousses"],
  ["Tortas", "Tortas e Cheesecakes"],
  ["Cookies", "Cookies e Biscoitos"],
  ["Bebidas", "Bebidas e Vitaminas"],
];

const categoryImages = {
  "Brigadeiros e Chocolates": [
    "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=720&q=78",
  ],
  Bolos: [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=720&q=78",
  ],
  "Pudins e Gelatinas": [
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=720&q=78",
  ],
  Mousses: [
    "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=720&q=78",
  ],
  "Tortas e Cheesecakes": [
    "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=720&q=78",
  ],
  "Cookies e Biscoitos": [
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=720&q=78",
  ],
  "Bebidas e Vitaminas": [
    "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=720&q=78",
  ],
};

const icons = {
  leaf: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.8 4.2C13.7 3.3 8.6 5.5 6.1 8.5c-2 2.4-2.4 5.3-.7 7.7M4 20c2.2-5.1 5.8-8.5 11.5-10.7M19.8 4.2c1.1 6.6-1.2 11-4.2 12.8-2.2 1.3-4.8 1-6.3-.3"/></svg>`,
  search: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="9" r="3"/><path d="M3.5 19c.6-3 2.4-4.5 5.5-4.5s4.9 1.5 5.5 4.5M15 7.5a2.5 2.5 0 1 1 0 5M16 14.5c2.5.2 3.9 1.7 4.4 4.5"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
};

const state = { category: "Todos" };
const app = document.querySelector("#app");

const localRecipeImages = {
  1: "./images/recipes/1.jpg",
  2: "./images/recipes/2.jpg",
  3: "./images/recipes/3.jpg",
  4: "./images/recipes/4.jpg",
  5: "./images/recipes/5.jpg",
  6: "./images/recipes/6.jpg",
  7: "./images/recipes/7.jpg",
  8: "./images/recipes/8.jpg",
  9: "./images/recipes/9.jpg",
  10: "./images/recipes/10.jpg",
  11: "./images/recipes/11.jpg",
  12: "./images/recipes/12.jpg",
  13: "./images/recipes/13.jpg",
  14: "./images/recipes/14.jpg",
  15: "./images/recipes/15.jpg",
  16: "./images/recipes/16.jpg",
  17: "./images/recipes/17.jpg",
  18: "./images/recipes/18.jpg",
  19: "./images/recipes/19.jpg",
  20: "./images/recipes/20.jpg",
  21: "./images/recipes/21.jpg",
  22: "./images/recipes/22.jpg",
  23: "./images/recipes/23.jpg",
  24: "./images/recipes/24.jpg",
  25: "./images/recipes/25.jpg",
  26: "./images/recipes/26.jpg",
  27: "./images/recipes/27.jpg",
  28: "./images/recipes/28.jpg",
  29: "./images/recipes/29.jpg",
  30: "./images/recipes/30.jpg",
  31: "./images/recipes/31.jpg",
  32: "./images/recipes/32.jpg",
  33: "./images/recipes/33.jpg",
  34: "./images/recipes/34.jpg",
  35: "./images/recipes/35.jpg",
  36: "./images/recipes/36.jpg",
  37: "./images/recipes/37.jpg",
  38: "./images/recipes/38.jpg",
  39: "./images/recipes/39.jpg",
  40: "./images/recipes/40.jpg",
  41: "./images/recipes/41.jpg",
  42: "./images/recipes/42.jpg",
  43: "./images/recipes/43.jpg",
  44: "./images/recipes/44.jpg",
  45: "./images/recipes/45.jpg",
  46: "./images/recipes/46.jpg",
  47: "./images/recipes/47.jpg",
  48: "./images/recipes/48.jpg",
  49: "./images/recipes/49.jpg",
  50: "./images/recipes/50.jpg",
};

function imageFor(recipe) {
  if (localRecipeImages[recipe.id]) return localRecipeImages[recipe.id];
  if (recipe.foto) return recipe.foto;
  const images = categoryImages[recipe.categoria];
  return images[(recipe.id - 1) % images.length];
}

function recipeCard(recipe, priority = false) {
  return `
    <a class="recipe-card" href="#receita/${recipe.id}" aria-label="Abrir receita ${recipe.nome}">
      <div class="card-image-wrap">
        <img class="card-image" src="${imageFor(recipe)}" alt="${recipe.nome}" ${priority ? "" : 'loading="lazy"'} />
        <span class="time-pill">${icons.clock}${recipe.tempo_preparo}</span>
      </div>
      <div class="card-copy">
        <span class="card-category">${categories.find((item) => item[1] === recipe.categoria)?.[0] || recipe.categoria}</span>
        <h3>${recipe.nome}</h3>
        <span class="card-link">Ver receita <b>→</b></span>
      </div>
    </a>
  `;
}

function renderHome() {
  const filtered = window.RECIPES.filter((recipe) => {
    return state.category === "Todos" || recipe.categoria === state.category;
  });

  app.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="#receitas" aria-label="Diabético Guloso - início">
          <span class="brand-mark">${icons.leaf}</span>
          <span><strong>Diabético</strong> Guloso</span>
        </a>
        <a class="bonus-nav-btn" href="#bonus" aria-label="Bônus: Café da Manhã">
          ⭐ Bônus
        </a>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero-content">
          <p class="eyebrow">${icons.spark} Cozinhe com mais leveza</p>
          <h1>O doce pode continuar fazendo parte da sua vida.</h1>
          <p>Receitas gostosas, simples e pensadas para escolhas mais equilibradas no seu dia a dia.</p>
          <div class="hero-stats">
            <span><strong>50</strong> receitas</span>
            <span><strong>7</strong> categorias</span>
            <span><strong>0</strong> complicação</span>
          </div>
        </div>
      </section>

      <section class="catalog container" aria-label="Catálogo de receitas">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Escolha a sua favorita</p>
            <h2>Receitas para adoçar o dia</h2>
          </div>
          <span id="result-count">${filtered.length} receitas</span>
        </div>

        <div class="chips" role="tablist" aria-label="Categorias">
          ${categories.map(([label, value]) => `
            <button class="chip ${state.category === value ? "active" : ""}" data-category="${value}" role="tab" aria-selected="${state.category === value}">
              ${label}
            </button>
          `).join("")}
        </div>

        <div id="recipe-grid" class="recipe-grid">
          ${filtered.length ? filtered.map((recipe, index) => recipeCard(recipe, index < 4)).join("") : `
            <div class="empty-state">
              <span>${icons.search}</span>
              <h3>Nenhuma receita encontrada</h3>
              <p>Tente buscar outro nome ou escolher uma categoria diferente.</p>
            </div>
          `}
        </div>
      </section>

      <section class="care-note">
        <div class="container care-note-inner">
          <span class="brand-mark">${icons.leaf}</span>
          <div>
            <h2>Uma escolha consciente de cada vez.</h2>
            <p>As receitas priorizam ingredientes com menor impacto glicêmico. Ajuste as porções à orientação do seu profissional de saúde.</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container footer-inner">
        <a class="brand" href="#receitas"><span class="brand-mark">${icons.leaf}</span><span><strong>Diabético</strong> Guloso</span></a>
        <p>Receitas gostosas para uma rotina mais leve.</p>
      </div>
    </footer>
  `;

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.category = chip.dataset.category;
      renderHome();
      document.querySelector(".catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderWelcome() {
  app.innerHTML = `
    <main class="welcome-page">
      <section class="welcome-panel">
        <div class="welcome-glow welcome-glow-one"></div>
        <div class="welcome-glow welcome-glow-two"></div>
        <div class="container welcome-content">
          <a class="brand welcome-brand" href="#" aria-label="Diabético Guloso">
            <span class="brand-mark">${icons.leaf}</span>
            <span><strong>Diabético</strong> Guloso</span>
          </a>

          <div class="welcome-copy">
            <p class="eyebrow">${icons.spark} Seu acesso está liberado</p>
            <h1>Que bom ter você por aqui.</h1>
            <p class="welcome-lead">Preparamos uma coleção especial de receitas para você continuar aproveitando os sabores que ama com escolhas mais equilibradas.</p>

            <div class="welcome-card">
              <span class="welcome-card-icon">${icons.leaf}</span>
              <div>
                <strong>Um jeito mais leve de adoçar a rotina</strong>
                <p>São +50 receitas práticas organizadas por categoria para consultar sempre que quiser.</p>
              </div>
            </div>

            <a class="welcome-button" href="#receitas">
              Acessar minhas receitas <span>→</span>
            </a>
            <p class="welcome-note">Seu conteúdo fica disponível diretamente neste link.</p>
          </div>
        </div>
      </section>
    </main>
  `;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderRecipe(id) {
  const recipe = window.RECIPES.find((item) => item.id === Number(id));
  if (!recipe) {
    location.hash = "";
    return;
  }

  const label = categories.find((item) => item[1] === recipe.categoria)?.[0] || recipe.categoria;
  const related = window.RECIPES
    .filter((item) => item.categoria === recipe.categoria && item.id !== recipe.id)
    .slice(0, 3);

  app.innerHTML = `
    <header class="site-header recipe-nav">
      <div class="container nav">
        <a class="back-link" href="#receitas">${icons.arrow} Voltar para receitas</a>
        <a class="bonus-nav-btn" href="#bonus" aria-label="Bônus: Café da Manhã">⭐ Bônus</a>
      </div>
    </header>

    <main class="recipe-page">
      <section class="recipe-hero">
        <img src="${imageFor(recipe)}" alt="${recipe.nome}" />
        <div class="recipe-hero-overlay"></div>
        <div class="container recipe-title">
          <span class="recipe-label">${label}</span>
          <h1>${recipe.nome}</h1>
        </div>
      </section>

      <div class="container recipe-body">
        <div class="metadata">
          <div>${icons.clock}<span><small>Preparo</small><strong>${recipe.tempo_preparo}</strong></span></div>
          <div>${icons.spark}<span><small>Dificuldade</small><strong>${recipe.dificuldade}</strong></span></div>
          <div>${icons.users}<span><small>Rendimento</small><strong>${recipe.porcoes} porções</strong></span></div>
        </div>

        <div class="recipe-columns">
          <section class="recipe-section ingredients">
            <p class="eyebrow">Separe tudo antes de começar</p>
            <h2>Ingredientes</h2>
            <ul>
              ${recipe.ingredientes.map((item) => `<li><span>✓</span>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="recipe-section preparation">
            <p class="eyebrow">Agora é só preparar</p>
            <h2>Modo de preparo</h2>
            <ol>
              ${recipe.modo_preparo.map((step) => `<li><span>${step}</span></li>`).join("")}
            </ol>
          </section>
        </div>

        <section class="tip-box">
          <span class="tip-icon">${icons.leaf}</span>
          <div>
            <p class="eyebrow">Dica Diabético Guloso</p>
            <h2>Por que é uma escolha mais equilibrada?</h2>
            <p>${recipe.dica}</p>
          </div>
        </section>

        <p class="disclaimer">Cada organismo reage de um jeito. Monitore sua glicemia e siga as orientações do seu médico ou nutricionista.</p>

        <a class="primary-button" href="#receitas">${icons.arrow} Voltar para receitas</a>

        <section class="related">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Continue explorando</p>
              <h2>Mais receitas desta categoria</h2>
            </div>
          </div>
          <div class="recipe-grid">
            ${related.map((item) => recipeCard(item)).join("")}
          </div>
        </section>
      </div>
    </main>
  `;

  window.scrollTo({ top: 0, behavior: "instant" });
}

function bonusCard(recipe) {
  return `
    <a class="recipe-card bonus-card" href="#bonus-receita/${recipe.id}" aria-label="Abrir receita ${recipe.nome}">
      <div class="card-image-wrap">
        <img class="card-image" src="${recipe.foto}" alt="${recipe.nome}" loading="lazy" />
        <span class="time-pill">${icons.clock}${recipe.tempo_preparo}</span>
      </div>
      <div class="card-copy">
        <span class="card-category bonus-category">${icons.sun} Café da manhã</span>
        <h3>${recipe.nome}</h3>
        <span class="card-link">Ver receita <b>→</b></span>
      </div>
    </a>
  `;
}

function renderBonus() {
  app.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="#receitas" aria-label="Diabético Guloso - início">
          <span class="brand-mark">${icons.leaf}</span>
          <span><strong>Diabético</strong> Guloso</span>
        </a>
        <a class="bonus-nav-btn bonus-nav-btn--active" href="#bonus" aria-label="Bônus: Café da Manhã">
          ⭐ Bônus
        </a>
      </div>
    </header>

    <main>
      <section class="bonus-hero">
        <div class="container bonus-hero-content">
          <p class="eyebrow bonus-eyebrow">${icons.spark} Conteúdo exclusivo para você</p>
          <div class="bonus-badge">BÔNUS</div>
          <h1>10 Receitas de Café da Manhã para Diabéticos</h1>
          <p>Comece o dia com energia, sabor e glicemia sob controle. Receitas práticas pensadas para a refeição mais importante do seu dia.</p>
          <div class="bonus-hero-stats">
            <span>${icons.sun}<strong>10</strong> receitas</span>
            <span>${icons.clock}<strong>5–15 min</strong> de preparo</span>
            <span>${icons.spark}<strong>0</strong> açúcar</span>
          </div>
        </div>
      </section>

      <section class="catalog container bonus-catalog" aria-label="Receitas bônus de café da manhã">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Seu bônus exclusivo</p>
            <h2>Café da manhã que adoça sem culpa</h2>
          </div>
          <span id="result-count">10 receitas</span>
        </div>

        <div class="recipe-grid">
          ${window.BONUS_RECIPES.map((recipe) => bonusCard(recipe)).join("")}
        </div>
      </section>

      <section class="care-note">
        <div class="container care-note-inner">
          <span class="brand-mark">${icons.leaf}</span>
          <div>
            <h2>Uma escolha consciente de cada vez.</h2>
            <p>As receitas priorizam ingredientes com menor impacto glicêmico. Ajuste as porções à orientação do seu profissional de saúde.</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container footer-inner">
        <a class="brand" href="#receitas"><span class="brand-mark">${icons.leaf}</span><span><strong>Diabético</strong> Guloso</span></a>
        <p>Receitas gostosas para uma rotina mais leve.</p>
      </div>
    </footer>
  `;

  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderBonusRecipe(id) {
  const recipe = window.BONUS_RECIPES.find((item) => item.id === Number(id));
  if (!recipe) {
    location.hash = "#bonus";
    return;
  }

  const related = window.BONUS_RECIPES
    .filter((item) => item.id !== recipe.id)
    .slice(0, 3);

  app.innerHTML = `
    <header class="site-header recipe-nav">
      <div class="container nav">
        <a class="back-link" href="#bonus">${icons.arrow} Voltar para o bônus</a>
        <a class="bonus-nav-btn bonus-nav-btn--active" href="#bonus">⭐ Bônus</a>
      </div>
    </header>

    <main class="recipe-page">
      <section class="recipe-hero bonus-recipe-hero">
        <img src="${recipe.foto}" alt="${recipe.nome}" />
        <div class="recipe-hero-overlay bonus-recipe-overlay"></div>
        <div class="container recipe-title">
          <span class="recipe-label bonus-recipe-label">${icons.sun} Café da manhã · Bônus Exclusivo</span>
          <h1>${recipe.nome}</h1>
        </div>
      </section>

      <div class="container recipe-body">
        <div class="metadata">
          <div>${icons.clock}<span><small>Preparo</small><strong>${recipe.tempo_preparo}</strong></span></div>
          <div>${icons.spark}<span><small>Dificuldade</small><strong>${recipe.dificuldade}</strong></span></div>
          <div>${icons.users}<span><small>Rendimento</small><strong>${recipe.porcoes} porção${recipe.porcoes > 1 ? "ões" : ""}</strong></span></div>
        </div>

        <div class="recipe-columns">
          <section class="recipe-section ingredients">
            <p class="eyebrow">Separe tudo antes de começar</p>
            <h2>Ingredientes</h2>
            <ul>
              ${recipe.ingredientes.map((item) => `<li><span>✓</span>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="recipe-section preparation">
            <p class="eyebrow">Agora é só preparar</p>
            <h2>Modo de preparo</h2>
            <ol>
              ${recipe.modo_preparo.map((step) => `<li><span>${step}</span></li>`).join("")}
            </ol>
          </section>
        </div>

        <section class="tip-box bonus-tip-box">
          <span class="tip-icon bonus-tip-icon">${icons.sun}</span>
          <div>
            <p class="eyebrow bonus-eyebrow-small">Dica Diabético Guloso</p>
            <h2>Por que é uma escolha mais equilibrada?</h2>
            <p>${recipe.dica}</p>
          </div>
        </section>

        <p class="disclaimer">Cada organismo reage de um jeito. Monitore sua glicemia e siga as orientações do seu médico ou nutricionista.</p>

        <a class="primary-button bonus-back-button" href="#bonus">${icons.arrow} Voltar para o bônus</a>

        <section class="related">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Continue explorando</p>
              <h2>Mais cafés da manhã</h2>
            </div>
          </div>
          <div class="recipe-grid">
            ${related.map((item) => bonusCard(item)).join("")}
          </div>
        </section>
      </div>
    </main>
  `;

  window.scrollTo({ top: 0, behavior: "instant" });
}

function route() {
  const matchRecipe = location.hash.match(/^#receita\/(\d+)$/);
  const matchBonus = location.hash.match(/^#bonus-receita\/(\d+)$/);
  if (matchRecipe) renderRecipe(matchRecipe[1]);
  else if (matchBonus) renderBonusRecipe(matchBonus[1]);
  else if (location.hash === "#receitas") renderHome();
  else if (location.hash === "#bonus") renderBonus();
  else renderWelcome();
}

window.addEventListener("hashchange", route);
route();
