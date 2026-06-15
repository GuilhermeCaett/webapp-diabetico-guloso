const categories = [
  ["Todas", "Todas"],
  ["Chocolates", "Chocolates y Trufas"],
  ["Bizcochos", "Bizcochos y Tortas"],
  ["Flanes", "Flanes y Gelatinas"],
  ["Mousses", "Mousses"],
  ["Tartas", "Tartas y Cheesecakes"],
  ["Galletas", "Galletas y Bizcochos"],
  ["Bebidas", "Bebidas y Batidos"],
];

const categoryImages = {
  "Chocolates y Trufas": [
    "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=720&q=78",
  ],
  "Bizcochos y Tortas": [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=720&q=78",
  ],
  "Flanes y Gelatinas": [
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=720&q=78",
  ],
  Mousses: [
    "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=720&q=78",
  ],
  "Tartas y Cheesecakes": [
    "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=720&q=78",
  ],
  "Galletas y Bizcochos": [
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=720&q=78",
    "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=720&q=78",
  ],
  "Bebidas y Batidos": [
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

const state = { category: "Todas" };
const app = document.querySelector("#app");

const localRecipeImages = {
  1: "/images/recipes/1.jpg",
  2: "/images/recipes/2.jpg",
  3: "/images/recipes/3.jpg",
  4: "/images/recipes/4.jpg",
  5: "/images/recipes/5.jpg",
  6: "/images/recipes/6.jpg",
  7: "/images/recipes/7.jpg",
  8: "/images/recipes/8.jpg",
  9: "/images/recipes/9.jpg",
  10: "/images/recipes/10.jpg",
  11: "/images/recipes/11.jpg",
  12: "/images/recipes/12.jpg",
  13: "/images/recipes/13.jpg",
  14: "/images/recipes/14.jpg",
  15: "/images/recipes/15.jpg",
  16: "/images/recipes/16.jpg",
  17: "/images/recipes/17.jpg",
  18: "/images/recipes/18.jpg",
  19: "/images/recipes/19.jpg",
  20: "/images/recipes/20.jpg",
  21: "/images/recipes/21.jpg",
  22: "/images/recipes/22.jpg",
  23: "/images/recipes/23.jpg",
  24: "/images/recipes/24.jpg",
  25: "/images/recipes/25.jpg",
  26: "/images/recipes/26.jpg",
  27: "/images/recipes/27.jpg",
  28: "/images/recipes/28.jpg",
  29: "/images/recipes/29.jpg",
  30: "/images/recipes/30.jpg",
  31: "/images/recipes/31.jpg",
  32: "/images/recipes/32.jpg",
  33: "/images/recipes/33.jpg",
  34: "/images/recipes/34.jpg",
  35: "/images/recipes/35.jpg",
  36: "/images/recipes/36.jpg",
  37: "/images/recipes/37.jpg",
  38: "/images/recipes/38.jpg",
  39: "/images/recipes/39.jpg",
  40: "/images/recipes/40.jpg",
  41: "/images/recipes/41.jpg",
  42: "/images/recipes/42.jpg",
  43: "/images/recipes/43.jpg",
  44: "/images/recipes/44.jpg",
  45: "/images/recipes/45.jpg",
  46: "/images/recipes/46.jpg",
  47: "/images/recipes/47.jpg",
  48: "/images/recipes/48.jpg",
  49: "/images/recipes/49.jpg",
  50: "/images/recipes/50.jpg",
};

function imageFor(recipe) {
  if (localRecipeImages[recipe.id]) return localRecipeImages[recipe.id];
  if (recipe.foto) return recipe.foto;
  const images = categoryImages[recipe.categoria];
  return images[(recipe.id - 1) % images.length];
}

function recipeCard(recipe, priority = false) {
  return `
    <a class="recipe-card" href="#receta/${recipe.id}" aria-label="Abrir receta ${recipe.nome}">
      <div class="card-image-wrap">
        <img class="card-image" src="${imageFor(recipe)}" alt="${recipe.nome}" ${priority ? "" : 'loading="lazy"'} />
        <span class="time-pill">${icons.clock}${recipe.tempo_preparo}</span>
      </div>
      <div class="card-copy">
        <span class="card-category">${categories.find((item) => item[1] === recipe.categoria)?.[0] || recipe.categoria}</span>
        <h3>${recipe.nome}</h3>
        <span class="card-link">Ver receta <b>→</b></span>
      </div>
    </a>
  `;
}

function renderHome() {
  const filtered = window.RECIPES.filter((recipe) => {
    return state.category === "Todas" || recipe.categoria === state.category;
  });

  app.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="#recetas" aria-label="Diabético Goloso - inicio">
          <span class="brand-mark">${icons.leaf}</span>
          <span><strong>Diabético</strong> Goloso</span>
        </a>
        <a class="bonus-nav-btn" href="#bonus" aria-label="Bonus: Recetas de Desayuno">
          ⭐ Bonus
        </a>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero-content">
          <p class="eyebrow">${icons.spark} Cocinar con más facilidad</p>
          <h1>El dulzor puede seguir siendo parte de tu vida.</h1>
          <p>Recetas deliciosas y simples diseñadas para elecciones más inteligentes y equilibradas cada día.</p>
          <div class="hero-stats">
            <span><strong>50</strong> recetas</span>
            <span><strong>7</strong> categorías</span>
            <span><strong>0</strong> complicaciones</span>
          </div>
        </div>
      </section>

      <section class="bonus-banner">
        <div class="container bonus-banner-inner">
          <div class="bonus-banner-text">
            <span class="bonus-banner-tag">⭐ BONUS EXCLUSIVO</span>
            <h2>Recetas de Desayuno para Diabéticos</h2>
            <p>10 recetas fáciles y deliciosas para empezar el día con energía y glucemia equilibrada.</p>
          </div>
          <a class="bonus-banner-btn" href="#bonus">
            <span class="bonus-banner-btn-icon">☀️</span>
            <span>
              <strong>Ver las recetas de desayuno</strong>
              <small>Toca aquí para acceder a tu bonus</small>
            </span>
            <span class="bonus-banner-arrow">→</span>
          </a>
        </div>
      </section>

      <section class="catalog container" aria-label="Catálogo de recetas">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Elige tu favorita</p>
            <h2>Recetas para endulzar tu día</h2>
          </div>
          <span id="result-count">${filtered.length} recetas</span>
        </div>

        <div class="chips" role="tablist" aria-label="Categorías">
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
              <h3>No se encontraron recetas</h3>
              <p>Prueba seleccionando otra categoría.</p>
            </div>
          `}
        </div>
      </section>

      <section class="care-note">
        <div class="container care-note-inner">
          <span class="brand-mark">${icons.leaf}</span>
          <div>
            <h2>Una elección inteligente a la vez.</h2>
            <p>Estas recetas priorizan ingredientes con menor impacto glucémico. Ajusta siempre las porciones según la orientación de tu médico o nutricionista.</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container footer-inner">
        <a class="brand" href="#recetas"><span class="brand-mark">${icons.leaf}</span><span><strong>Diabético</strong> Goloso</span></a>
        <p>Recetas deliciosas para una rutina más ligera y saludable.</p>
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
          <a class="brand welcome-brand" href="#" aria-label="Diabético Goloso">
            <span class="brand-mark">${icons.leaf}</span>
            <span><strong>Diabético</strong> Goloso</span>
          </a>

          <div class="welcome-copy">
            <p class="eyebrow">${icons.spark} Tu acceso está listo</p>
            <h1>Qué bueno que estás aquí.</h1>
            <p class="welcome-lead">Reunimos una colección especial de recetas para que puedas seguir disfrutando los sabores que amas — con elecciones más inteligentes y equilibradas.</p>

            <div class="welcome-card">
              <span class="welcome-card-icon">${icons.leaf}</span>
              <div>
                <strong>Una forma más ligera de endulzar tu rutina</strong>
                <p>Más de 50 recetas prácticas organizadas por categoría, disponibles cuando las necesites.</p>
              </div>
            </div>

            <a class="welcome-button" href="#recetas">
              Acceder a mis recetas <span>→</span>
            </a>
            <p class="welcome-note">Tu contenido está disponible directamente desde este enlace.</p>
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
        <a class="back-link" href="#recetas">${icons.arrow} Volver a recetas</a>
        <a class="bonus-nav-btn" href="#bonus">⭐ Bonus</a>
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
          <div>${icons.clock}<span><small>Tiempo de prep.</small><strong>${recipe.tempo_preparo}</strong></span></div>
          <div>${icons.spark}<span><small>Dificultad</small><strong>${recipe.dificuldade}</strong></span></div>
          <div>${icons.users}<span><small>Porciones</small><strong>${recipe.porcoes} porciones</strong></span></div>
        </div>

        <div class="recipe-columns">
          <section class="recipe-section ingredients">
            <p class="eyebrow">Primero reúne todo</p>
            <h2>Ingredientes</h2>
            <ul>
              ${recipe.ingredientes.map((item) => `<li><span>✓</span>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="recipe-section preparation">
            <p class="eyebrow">Ahora vamos a cocinar</p>
            <h2>Modo de preparación</h2>
            <ol>
              ${recipe.modo_preparo.map((step) => `<li><span>${step}</span></li>`).join("")}
            </ol>
          </section>
        </div>

        <section class="tip-box">
          <span class="tip-icon">${icons.leaf}</span>
          <div>
            <p class="eyebrow">Tip Diabético Goloso</p>
            <h2>¿Por qué es una elección más inteligente?</h2>
            <p>${recipe.dica}</p>
          </div>
        </section>

        <p class="disclaimer">Cada organismo responde diferente. Monitorea tu glucemia y sigue la orientación de tu médico o nutricionista.</p>

        <a class="back-big-btn" href="#recetas">${icons.arrow} Volver a todas las recetas</a>

        <section class="related">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Sigue explorando</p>
              <h2>Más recetas de esta categoría</h2>
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
    <a class="recipe-card bonus-card" href="#bonus-receta/${recipe.id}" aria-label="Abrir receta ${recipe.nome}">
      <div class="card-image-wrap">
        <img class="card-image" src="${recipe.foto}" alt="${recipe.nome}" loading="lazy" />
        <span class="time-pill">${icons.clock}${recipe.tempo_preparo}</span>
      </div>
      <div class="card-copy">
        <span class="card-category bonus-category">${icons.sun} Desayuno</span>
        <h3>${recipe.nome}</h3>
        <span class="card-link">Ver receta <b>→</b></span>
      </div>
    </a>
  `;
}

function renderBonus() {
  app.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="#recetas" aria-label="Diabético Goloso - inicio">
          <span class="brand-mark">${icons.leaf}</span>
          <span><strong>Diabético</strong> Goloso</span>
        </a>
        <a class="bonus-nav-btn bonus-nav-btn--active" href="#bonus">
          ⭐ Bonus
        </a>
      </div>
    </header>

    <main>
      <section class="bonus-hero">
        <div class="container bonus-hero-content">
          <p class="eyebrow bonus-eyebrow">${icons.spark} Contenido exclusivo para ti</p>
          <div class="bonus-badge">BONUS</div>
          <h1>10 Recetas de Desayuno para Diabéticos</h1>
          <p>Empieza el día con energía, gran sabor y la glucemia bajo control. Recetas simples y prácticas pensadas para la comida más importante del día.</p>
          <div class="bonus-hero-stats">
            <span>${icons.sun}<strong>10</strong> recetas</span>
            <span>${icons.clock}<strong>5–15 min</strong> de preparación</span>
            <span>${icons.spark}<strong>0</strong> azúcar añadida</span>
          </div>
        </div>
      </section>

      <div class="container">
        <a class="back-big-btn back-big-btn--outline" href="#recetas">${icons.arrow} Volver a las recetas principales</a>
      </div>

      <section class="catalog container bonus-catalog" aria-label="Recetas de desayuno bonus">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Tu bonus exclusivo</p>
            <h2>Desayunos que satisfacen sin culpa</h2>
          </div>
          <span id="result-count">10 recetas</span>
        </div>

        <div class="recipe-grid">
          ${window.BONUS_RECIPES.map((recipe) => bonusCard(recipe)).join("")}
        </div>
      </section>

      <section class="care-note">
        <div class="container care-note-inner">
          <span class="brand-mark">${icons.leaf}</span>
          <div>
            <h2>Una elección inteligente a la vez.</h2>
            <p>Estas recetas priorizan ingredientes con menor impacto glucémico. Ajusta siempre las porciones según la orientación de tu médico o nutricionista.</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container footer-inner">
        <a class="brand" href="#recetas"><span class="brand-mark">${icons.leaf}</span><span><strong>Diabético</strong> Goloso</span></a>
        <p>Recetas deliciosas para una rutina más ligera y saludable.</p>
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
        <a class="back-link" href="#bonus">${icons.arrow} Volver al bonus</a>
        <a class="bonus-nav-btn bonus-nav-btn--active" href="#bonus">⭐ Bonus</a>
      </div>
    </header>

    <main class="recipe-page">
      <section class="recipe-hero bonus-recipe-hero">
        <img src="${recipe.foto}" alt="${recipe.nome}" />
        <div class="recipe-hero-overlay bonus-recipe-overlay"></div>
        <div class="container recipe-title">
          <span class="recipe-label bonus-recipe-label">${icons.sun} Desayuno · Bonus Exclusivo</span>
          <h1>${recipe.nome}</h1>
        </div>
      </section>

      <div class="container recipe-body">
        <div class="metadata">
          <div>${icons.clock}<span><small>Tiempo de prep.</small><strong>${recipe.tempo_preparo}</strong></span></div>
          <div>${icons.spark}<span><small>Dificultad</small><strong>${recipe.dificuldade}</strong></span></div>
          <div>${icons.users}<span><small>Porciones</small><strong>${recipe.porcoes} porción${recipe.porcoes > 1 ? "es" : ""}</strong></span></div>
        </div>

        <div class="recipe-columns">
          <section class="recipe-section ingredients">
            <p class="eyebrow">Primero reúne todo</p>
            <h2>Ingredientes</h2>
            <ul>
              ${recipe.ingredientes.map((item) => `<li><span>✓</span>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="recipe-section preparation">
            <p class="eyebrow">Ahora vamos a cocinar</p>
            <h2>Modo de preparación</h2>
            <ol>
              ${recipe.modo_preparo.map((step) => `<li><span>${step}</span></li>`).join("")}
            </ol>
          </section>
        </div>

        <section class="tip-box bonus-tip-box">
          <span class="tip-icon bonus-tip-icon">${icons.sun}</span>
          <div>
            <p class="eyebrow bonus-eyebrow-small">Tip Diabético Goloso</p>
            <h2>¿Por qué es una elección más inteligente?</h2>
            <p>${recipe.dica}</p>
          </div>
        </section>

        <p class="disclaimer">Cada organismo responde diferente. Monitorea tu glucemia y sigue la orientación de tu médico o nutricionista.</p>

        <a class="back-big-btn" href="#bonus" style="background:var(--amber-500);color:var(--amber-900);">${icons.arrow} Volver a las recetas de desayuno</a>

        <section class="related">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Sigue explorando</p>
              <h2>Más recetas de desayuno</h2>
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
  const matchRecipe = location.hash.match(/^#receta\/(\d+)$/);
  const matchBonus = location.hash.match(/^#bonus-receta\/(\d+)$/);
  if (matchRecipe) renderRecipe(matchRecipe[1]);
  else if (matchBonus) renderBonusRecipe(matchBonus[1]);
  else if (location.hash === "#recetas") renderHome();
  else if (location.hash === "#bonus") renderBonus();
  else renderWelcome();
}

window.addEventListener("hashchange", route);
route();
