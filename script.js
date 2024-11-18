document.addEventListener("DOMContentLoaded", function () {
    initVisitCounter();
});

/**
 * Função para inicializar e atualizar o contador de visitas.
 */
function initVisitCounter() {
    const navbar = document.querySelector('#navbar-links');
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

    navbar.addEventListener('interactions', function (event) {
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
