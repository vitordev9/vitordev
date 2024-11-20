const translations = {
    "pt-br": {
        "translate": "PT-BR",
        "introductionTitle": "Introdução",
        "aboutTitle": "Sobre mim",
        "skillsTitle": "Conhecimentos",
        "cursesTitle": "Linha do Tempo (Cursos)",
        "socialTitle": "Redes sociais",
        "clients": "Clientes",
        "profileLocation": "Franca, São Paulo",
        "profilePhone": "Em breve",
        "profileEmail": "embreve@gmail.com",
        "profileJob": "NextCode",
        "informations": "Informações",
        "introContent": [
            "👑 • Ceo da Nextcode",
            "💻 • Estudando desenvolvimento web",
            "📚 • Em breve estarei cursando Análise e Desenvolvimento de Sistemas na Universidade de Franca."
        ],
        "aboutContent": "Olá, meu nome é Vitor Hugo, tenho 20 anos, sou estudante de desenvolvimento Front-End. Gosto de desenvolver interfaces bonitas, intuitivas e fáceis de usar com a intenção de trazer uma boa experiência ao usuário.",
        "jobs": "NextCode",
        "socialGitHub": "GitHub",
        "socialSpotify": "Spotify",
        "socialDiscord": "Discord",
        "socialSteam": "Steam"
    },
    "en-us": {
        "translate": "EN-US",
        "introductionTitle": "Introduction",
        "aboutTitle": "About me",
        "skillsTitle": "Skills",
        "cursesTitle": "Timeline (Courses)",
        "socialTitle": "Social networks",
        "clients": "Customers",
        "profileLocation": "Franca, São Paulo, Brazil",
        "profilePhone": "Coming soon",
        "profileEmail": "embreve@gmail.com",
        "profileJob": "NextCode",
        "informations": "Informations",
        "introContent": [
            "👑 • CEO of Nextcode",
            "💻 • Studying web development",
            "📚 • Soon I will be attending the Systems Analysis and Development course at the University of Franca."
        ],
        "aboutContent": "Hello, my name is Vitor Hugo, I'm 20 years old, a Front-End development student. I like to develop beautiful, intuitive, and easy-to-use interfaces with the intention of providing a great user experience.",
        "jobs": "NextCode",
        "socialGitHub": "GitHub",
        "socialSpotify": "Spotify",
        "socialDiscord": "Discord",
        "socialSteam": "Steam"
    }
};
document.addEventListener('DOMContentLoaded', function () {
    // Carregar o idioma inicial (pt-br por padrão)
    let currentLang = 'pt-br';

    // Elemento do botão de tradução
    const translateButton = document.querySelector('.translate');
    const languageText = translateButton.querySelector('p');

    // Função para aplicar a tradução no site
    function translatePage(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-key]');

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                if (Array.isArray(translations[lang][key])) {
                    element.innerHTML = translations[lang][key].join('<br>'); // Para arrays de texto (como a introdução)
                } else {
                    element.innerHTML = translations[lang][key]; // Para textos simples
                }
            }
        });
    }

    // Alterar idioma ao clicar no botão
    translateButton.addEventListener('click', function () {
        // Alternar entre pt-br e en-us
        if (currentLang === 'pt-br') {
            currentLang = 'en-us';
            languageText.innerHTML = 'EN-US'; // Atualizar texto do botão
        } else {
            currentLang = 'pt-br';
            languageText.innerHTML = 'PT-BR'; // Atualizar texto do botão
        }
        
        // Traduzir a página
        translatePage(currentLang);
    });

    // Aplicar o idioma inicial
    translatePage(currentLang);
});


document.addEventListener("DOMContentLoaded", function () {
    initVisitCounter();
});

/**
 * Função para inicializar e atualizar o contador de visitas.
 */
function initVisitCounter() {
    const navbar = document.getElementById('navbar-links');
    const visitCountElement = document.getElementById('visitCount');

    // Previne o menu de contexto e o evento de drag na navbar
    preventRightClickAndDrag(navbar);

    // Verifica e atualiza o contador de visitas
    updateVisitCount(visitCountElement);
}

/**
 * Função para prevenir o menu de contexto e o evento de drag na navbar.
 */
function preventRightClickAndDrag(navbar) {
    navbar.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    navbar.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
}

/**
 * Função para obter o contador de visitas armazenado no localStorage.
 * @returns {number} - O contador de visitas.
 */
function getVisitCount() {
    const count = localStorage.getItem('visitCount');
    return count ? parseInt(count) : 0; // Retorna 0 se não houver valor armazenado
}

/**
 * Função para salvar o contador de visitas no localStorage.
 * @param {number} count - O contador de visitas a ser salvo.
 */
function saveVisitCount(count) {
    localStorage.setItem('visitCount', count);
}

/**
 * Função para atualizar o contador de visitas exibido no site.
 * @param {HTMLElement} element - O elemento onde o contador será exibido.
 */
function updateVisitCount(element) {
    let count = getVisitCount(); // Obtém o valor atual do contador

    // Atualiza o contador de visitas na página
    const displayCount = count
    element.innerText = displayCount;

    if (!sessionStorage.getItem('hasVisited')) {
        sessionStorage.setItem('hasVisited', 'true');
        count += 1;
        saveVisitCount(count);
    }
}


function updateVisitCount(element) {
    let count = getVisitCount(); // Obtém o valor atual do contador

    // Atualiza o contador de visitas na página
    const displayCount = count
    element.innerText = displayCount;

    if (!sessionStorage.getItem('hasVisited')) {
        sessionStorage.setItem('hasVisited', 'true');
        count += 1;
        saveVisitCount(count);
    }
}

// Obtém o botão de tema
const themeButton = document.querySelector('.theme');

// Função para alternar entre os temas
function toggleTheme() {
    // Verifica o tema atual no localStorage ou usa 'dark' como padrão
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Alterna entre dark e light
    if (currentTheme === 'dark') {
        // Muda para o tema light
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        // Muda para o tema dark
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Adiciona o evento de clique no botão de troca de tema
themeButton.addEventListener('click', toggleTheme);

// Função para definir o tema baseado no localStorage ao carregar a página
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Se não houver nenhum tema salvo, assume o tema dark por padrão
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Inicializa o tema ao carregar a página
setInitialTheme();