const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    const p = icon.querySelector('p');
    let timeout;

    icon.addEventListener('mouseenter', () => {
        const card = icon.closest('.card');
        const input = card.previousElementSibling;

        if (input.checked) {
            clearTimeout(timeout);
            p.dataset.original = p.innerText;
            p.style.opacity = '0';

            timeout = setTimeout(() => {
                p.innerText = "Ler";
                p.style.opacity = '1';
            }, 300);
        }
    });

    icon.addEventListener('mouseleave', () => {
        const card = icon.closest('.card');
        const input = card.previousElementSibling;

        if (input.checked) {
            clearTimeout(timeout);
            p.style.opacity = '0';

            timeout = setTimeout(() => {
                p.innerText = p.dataset.original;
                p.style.opacity = '1';
            }, 300);
        }
    });
});