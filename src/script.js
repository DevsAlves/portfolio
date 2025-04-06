
// Selecionar elementos
const skills = document.querySelectorAll(".skill")
const containerLanguage = document.querySelector(".show-skill")
const heading = document.querySelector("#heading")
const content = document.querySelector("#content-language")
const infos = [
    {
        name: "HTML",
        info: "Linguagem de marcação usada para estruturar o conteúdo da web."
    },
    {
        name: "CSS",
        info: "Linguagem de estilo utilizada para definir o layout e a aparência visual de páginas web."
    },
    {
        name: "JavaScript",
        info: "Linguagem de programação usada para adicionar interatividade às páginas web."
    },
    {
        name: "Git",
        info: "Sistema de controle de versões que permite gerenciar o histórico de alterações no código."
    }
];


// Eventos 
skills.forEach( (elemento) => {
    elemento.addEventListener("mouseover" , () => {
        containerLanguage.style.display = 'block'

        const infoElemento = elemento.getAttribute('data-info')
        const result = infos.find(el => el.name === infoElemento)

        if(infoElemento === 'html') {
            heading.textContent = "HTML"
            content.textContent = "Linguagem de marcação usada para estruturar o conteúdo da web."
        } else if (infoElemento === 'css') {
            heading.textContent = "CSS"
            content.textContent = "Linguagem de estilo utilizada para definir o layout e a aparência visual de páginas web."
        } else if (infoElemento === 'js') {
            heading.textContent = "Java Script"
            content.textContent = "Linguagem de programação usada para adicionar interatividade às páginas web."
        } else if (infoElemento === 'git') {
            heading.textContent = "GIT"
            content.textContent = "Sistema de controle de versões que permite gerenciar o histórico de alterações no código."
        } else {
            console.log("Erro ao verificar")
        }
    })


    elemento.addEventListener("mouseout" , () => {
        containerLanguage.style.display = 'none'
    })
})