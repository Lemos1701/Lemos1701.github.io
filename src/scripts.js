const cards = document.querySelectorAll('.card');
let currentlyChecked = document.querySelector('input[type="radio"]:checked');

cards.forEach(card => {
    const input = card.previousElementSibling;
    const icon = card.querySelector('.icon');
    const p = icon.querySelector('p');

    // Armazena o texto original
    if (!p.dataset.original) {
        p.dataset.original = p.innerText;
    }

    // Estado inicial
    if (input.checked) {
        p.innerText = "Ver";
    }
    p.style.opacity = '1';

    input.addEventListener('change', () => {
        // Quando um novo card é selecionado
        if (input.checked) {
            // Animação para esconder o texto atual
            p.style.opacity = '0';
            
            setTimeout(() => {
                p.innerText = "Ver";
                p.style.opacity = '1';
            }, 500);
            
            // Restaura o card anterior (se houver)
            if (currentlyChecked && currentlyChecked !== input) {
                const previousCard = currentlyChecked.nextElementSibling;
                const previousP = previousCard.querySelector('.icon p');
                
                previousP.style.opacity = '0';
                setTimeout(() => {
                    previousP.innerText = previousP.dataset.original;
                    previousP.style.opacity = '1';
                }, 500);
            }
            
            currentlyChecked = input;
        }
    });

    // Clique → abre URL
    icon.addEventListener('click', () => {
        if (input.checked && p.innerText === "Ver") {
            const url = icon.dataset.url;
            window.open(url, '_blank');
        }
    });
});