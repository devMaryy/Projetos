//Criando variáveis e buscando o conteádo pelo ID:
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

//Criando variáveis e buscando o conteádo pela classe:
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
//Sem o ALL pois só tem 1 elemento com essa classe:
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");

let active = 0;
const total = items.length;
let timer;

// Função para mudar os items:
function update(direction) {

    // Procurando alguém com a classe item active e removendo a classe active dela:
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".dot.active").classList.remove("active"); // Igual, mas com a classe dot

    // Fazendo aparecer em outra posição:
    if (direction > 0) {
        active = active + 1;

        if (active === total) {
            active = 0;
        }
    }

    else if (direction < 0) {
        active = active - 1;

        if (active < 0) {
            active = total - 1;
        }
    }

    // Adicionando a classe active na próxima posição:
    items[active].classList.add("active");
    dots[active].classList.add("active");

    // Trocando o número indicador do item:
    numberIndicator.textContent = String(active + 1).padStart(2,"0"); 
    //padStart para adicionar algo antes, nesse caso vai ter dois caracteres e o primeiro é o 0.

}

    // Fazendo o timer para mudar os items:

    // Zerando timer:
    clearInterval(timer);

        //Outra forma de escrever uma function: () => 
    timer = setInterval(() => {
        update(1);
    }, 10000);


//Mandando fazer o update se clicar no botão:
prevButton.addEventListener("click", function() {
    update(-1);
});

nextButton.addEventListener("click", function() {
    update(1);
});


// Navegação sem Scroll

// Selecionando os links do menu e as seções:
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

// Selecionando os elementos que devem desaparecer:
const arrows = document.querySelector(".arrows");
const indicators = document.querySelector(".indicators");

// Quando clicar em um link do menu
navLinks.forEach(link => {
    link.addEventListener("click", (eventClick) => {
    eventClick.preventDefault(); // impede o comportamento padrão do link

    // Esconde todas as seções
    sections.forEach(section => section.classList.remove("visible"));

    // Pega o id do destino (ex: "#movies")
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Mostra a seção correspondente
    if (targetSection) {
        targetSection.classList.add("visible");
    }

    // Controla a visibilidade dos elementos (arrows, numbers e indicators)
    if (targetId === "#movies" || targetId === "#contact") {
        // Esconde quando NÃO for HOME
        arrows.style.display = "none";
        indicators.style.display = "none";
    } else {
        // Mostra de volta na HOME
        arrows.style.display = "flex";
        indicators.style.display = "flex";
    }
    });
});


// SAIBA MAIS - MODAL
const modals = {
    dragon: document.getElementById("modal-dragon"),
    avatar: document.getElementById("modal-avatar"),
    alice: document.getElementById("modal-alice")
};

// Botões "Saiba mais"
const btnDragon = document.querySelector(".card1 .btn-trailer");
const btnAvatar = document.querySelector(".card2 .btn-trailer");
const btnAlice = document.querySelector(".card3 .btn-trailer");

// Ações para abrir
btnDragon.addEventListener("click", (e) => {
    e.preventDefault();
    modals.dragon.style.display = "flex";
});

btnAvatar.addEventListener("click", (e) => {
    e.preventDefault();
    modals.avatar.style.display = "flex";
});

btnAlice.addEventListener("click", (e) => {
    e.preventDefault();
    modals.alice.style.display = "flex";
});

// Fechar clicando no X
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
    Object.values(modals).forEach(modal => modal.style.display = "none");
    });
});

// Fechar clicando fora do conteúdo
window.addEventListener("click", (e) => {
    Object.values(modals).forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
    });
});




