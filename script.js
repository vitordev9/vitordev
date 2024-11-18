// Objeto contendo as traduções para PT-BR e EN-US
const translations = {
    "pt-br": {
        "translate": "PT-BR",
        "introductionTitle": "Introdução",
        "aboutTitle": "Sobre mim",
        "skillsTitle": "Conhecimentos",
        "cursesTitle": "Linha do Tempo (Cursos)",
        "socialTitle": "Redes sociais",
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
        "socialInstagram": "Instagram",
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
        "socialInstagram": "Instagram",
        "socialGitHub": "GitHub",
        "socialSpotify": "Spotify",
        "socialDiscord": "Discord",
        "socialSteam": "Steam"
    }
};

// Função para atualizar o conteúdo do site
function translatePage(language) {
    // Atualiza o texto de todos os elementos
    document.querySelector('.translate p').textContent = translations[language].translate;
    document.querySelector('.content-section .introduction h3').textContent = translations[language].introductionTitle;
    document.querySelector('.content-section .about h3').textContent = translations[language].aboutTitle;
    document.querySelector('.content-section .skills h3').textContent = translations[language].skillsTitle;
    document.querySelector('.content-section .curses h3').textContent = translations[language].cursesTitle;
    document.querySelector('.content-section .social h3').textContent = translations[language].socialTitle;

    // Atualiza os conteúdos de Introdução
    let introContent = document.querySelectorAll('.content-section .introduction .card-content p');
    introContent[0].textContent = translations[language].introContent[0];
    introContent[1].textContent = translations[language].introContent[1];
    introContent[2].textContent = translations[language].introContent[2];

    // Atualiza o conteúdo Sobre mim
    document.querySelector('.content-section .about .card-content p').textContent = translations[language].aboutContent;

    // Atualiza o perfil
    document.querySelector('.profile-section .profile-info p:nth-child(1)').textContent = translations[language].profileLocation;
    document.querySelector('.profile-section .profile-info p:nth-child(2)').textContent = translations[language].profilePhone;
    document.querySelector('.profile-section .profile-info p:nth-child(3)').textContent = translations[language].profileEmail;
    document.querySelector('.profile-section .profile-info p:nth-child(4) a').textContent = translations[language].profileJob;

    // ATUALIZA O BOTÃO
    document.querySelector('.profile-section .info-button').textContent = translations[language].informations;
    
}

// Evento de clique no botão de tradução
document.querySelector('.translate').addEventListener('click', function () {
    const currentLang = document.querySelector('.translate').getAttribute('data-lang');
    const newLang = currentLang === 'pt-br' ? 'en-us' : 'pt-br';
    
    // Atualiza o atributo de linguagem do botão
    document.querySelector('.translate').setAttribute('data-lang', newLang);

    // Traduz a página para a nova linguagem
    translatePage(newLang);
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
