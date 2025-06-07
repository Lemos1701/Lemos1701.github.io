//Tornando os cards interativos 
const cards = document.querySelectorAll('.card');
let currentlyChecked = document.querySelector('input[type="radio"]:checked');

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
        p.innerText = "Ver";
    }
    p.style.opacity = '1';

    input.addEventListener('change', () => {
        if (input.checked) {

            p.style.opacity = '0';
            
            setTimeout(() => {
                p.innerText = "Ver";
                p.style.opacity = '1';
            }, 500);
            
            // Volta o numero do card anterior
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

// Animação de clicar na imgens de habilidades
const images = document.querySelectorAll('.dynamic_shadows');
let vet = [false, false, false, false, false, false, false, false];
let open = false;
let last_clicked;

images.forEach(image => {
    image.addEventListener('click', ()=>{
        for(let i = 0; i < 8; i++){
            if(vet[i]){
                open = true;
            }
        }
        if(!open){
            const skill_name = image.previousElementSibling;
            skill_name.classList.toggle('animate');
            last_clicked = image;
        }
        if(open){
            const last_skill = last_clicked.previousElementSibling;
            last_skill.classList.toggle('animate');

            const current_skill = image.previousElementSibling;
            current_skill.classList.toggle('animate');

            last_clicked = image;
        }
        vet[image.dataset.position] = !vet[image.dataset.position]
    });
});