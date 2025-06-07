//Tornando os cards interativos 
const cards = document.querySelectorAll('.card');
let currently_checked = document.querySelector('input[type="radio"]:checked');

cards.forEach(card => {
    const input = card.previousElementSibling;
    const icon = card.querySelector('.icon');
    const p = icon.querySelector('p');

    // Guardo o numero do indice em questão
    if (!p.dataset.original) {
        p.dataset.original = p.innerText;
    }

    // Para corrigir o caso base
    if (input.checked) {
        card.classList.remove('animated_card');
        p.innerText = "Ver";
    }
    p.style.opacity = '1';

    input.addEventListener('change', () => {
        if (input.checked) {
            p.style.opacity = '0';
            
            setTimeout(() => {
                card.classList.remove('animated_card');
                p.innerText = "Ver";
                p.style.opacity = '1';
            }, 200);
            
            // Volta o numero do card anterior
            if (currently_checked && currently_checked !== input) {
                const last_card = currently_checked.nextElementSibling;
                const last_p = last_card.querySelector('.icon p');

                last_card.classList.add('animated_card');
                last_p.style.opacity = '0';
                setTimeout(() => {
                    last_p.innerText = last_p.dataset.original;
                    last_p.style.opacity = '1';
                }, 200);
            }
            
            currently_checked = input;
        }
    });

    card.addEventListener('click', () => {
        if (input.checked && p.innerText === "Ver") {
            const url = icon.dataset.url;
            window.open(url, '_blank');
        }
    });
});

// Funcionalidade do botão de contato
let button = document.getElementById('button_contact');
let footer = document.querySelector('.footer');

button.addEventListener('click', () => {
    window.scrollTo({
        top: footer.offsetTop,
        behavior: "smooth"
    });
});

// Funcionalidade dos botões do menu do footer
let button_about = document.getElementById('about_me_button');
let about = document.querySelector('.about_me');
let button_skills = document.getElementById('skills_button');
let skill = document.querySelector('.skills');
let button_projects = document.getElementById('projects_button');
let project = document.querySelector('.projects');

button_about.addEventListener('click', ()=>{
    window.scrollTo({
        top: about.offsetTop + parseInt(about.style.marginTop),
        behavior: "smooth"
    });
});

button_skills.addEventListener('click', ()=>{
    window.scrollTo({
        top: skill.offsetTop,
        behavior: "smooth"
    });
});

button_projects.addEventListener('click', ()=>{
    window.scrollTo({
        top: project.offsetTop,
        behavior: "smooth"
    });
});

// Animação de clicar na imgens de habilidades e aparecer os nomes
const images = document.querySelectorAll('.dynamic_shadows');
let vet = [false, false, false, false, false, false, false, false];
let last_clicked;

images.forEach(image => {
    image.addEventListener('click', ()=>{
        const i = image.dataset.position
        const skill_name = image.previousElementSibling;

        if (last_clicked && last_clicked !== image) {
            const last_skill_name = last_clicked.previousElementSibling;
            last_skill_name.classList.remove('animate');
            vet[last_clicked.dataset.position] = false;
        }

        skill_name.classList.toggle('animate');
        vet[i] = !vet[i]

        last_clicked = vet[i] ? image: null;
    });
});
