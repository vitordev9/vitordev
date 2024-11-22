const translations = {
    "pt-br": {
        "translate": "PT-BR",
        "introductionTitle": "Introdução",
        "aboutTitle": "Sobre mim",
        "skillsTitle": "Conhecimentos",
        "socialTitle": "Redes sociais",
        "clients": "Clientes",
        "profileLocation": "Franca, São Paulo",
        "profilePhone": "Em breve",
        "profileEmail": "embreve@gmail.com",
        "profileJob": "NextCode",
        "informations": "Informações",
        "introContent": [
            "👑 • Dono da Nextcode",
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
        "socialTitle": "Social networks",
        "clients": "Customers",
        "profileLocation": "Franca, São Paulo, Brazil",
        "profilePhone": "Coming soon",
        "profileEmail": "embreve@gmail.com",
        "profileJob": "NextCode",
        "informations": "Information",
        "introContent": [
            "👑 • Owner of Nextcode",
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
}

function updateProfileInfo(lang) {
    const profileInfoItems = document.querySelectorAll('.profile-info p');
    profileInfoItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const key = ['profileLocation', 'profilePhone', 'profileEmail', 'profileJob'][index];

        if (key === 'profileJob') {
            const link = item.querySelector('a');
            if (link) {
                link.textContent = translations[lang][key];
            }
        } else {
            if (img) {
                item.innerHTML = img.outerHTML + ' ' + translations[lang][key];
            } else {
                item.textContent = translations[lang][key];
            }
        }
    });
}

function translatePage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (Array.isArray(translations[lang][key])) {
                element.innerHTML = translations[lang][key].join('<br>');
            } else {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.querySelector('img, svg')) {
                    const nodes = Array.from(element.childNodes);
                    const textNode = nodes.find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = ' ' + translations[lang][key];
                    } else {
                        element.appendChild(document.createTextNode(' ' + translations[lang][key]));
                    }
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });

    document.querySelector('.translate p').textContent = translations[lang].translate;

    updateProfileInfo(lang);
}

document.addEventListener('DOMContentLoaded', function () {
    let currentLang = 'pt-br';
    const translateButton = document.querySelector('.translate');

    translateButton.addEventListener('click', function () {
        currentLang = currentLang === 'pt-br' ? 'en-us' : 'pt-br';
        translatePage(currentLang);
    });

    translatePage(currentLang);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar-links');

    navbar.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    navbar.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
});


// TEMA DARK MODE E LIGHT MODE
const themeButton = document.querySelector('.theme');
themeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

setInitialTheme();