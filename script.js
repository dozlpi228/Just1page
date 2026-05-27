const cards = document.querySelectorAll('.card');

function checkCards() {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });

    // Если все карточки показаны — убираем scroll listener
    const allShown = [...cards].every(card =>
        card.classList.contains('show')
    );

    if (allShown) {
        window.removeEventListener('scroll', checkCards);
    }
}

// Проверка после полной загрузки страницы и изображений
window.addEventListener('load', () => {
    checkCards();

    // Небольшая задержка для корректного рендера
    setTimeout(checkCards, 100);
});

// Проверка при скролле
window.addEventListener('scroll', checkCards);

// Проверка при изменении размера окна
window.addEventListener('resize', checkCards);