
// Selecionar elementos
const skills = document.querySelectorAll(".skill")
const containerLanguage = document.querySelector(".show-skill")
const heading = document.querySelector("#heading")
const content = document.querySelector("#content-language")
const containerShowSkill = document.querySelector(".show-skill")


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
        name: "JS",
        info: "Linguagem de programação usada para adicionar interatividade às páginas web."
    },
    {
        name: "Git",
        info: "Sistema de controle de versões que permite gerenciar o histórico de alterações no código."
    }
]


// Eventos 
skills.forEach( (elemento) => {
    elemento.addEventListener("mouseover" , () => {
        containerLanguage.style.display = 'block'

        const dataInfo = elemento.getAttribute('data-info')

        const result = infos.find(el => el.name.toLowerCase() === dataInfo)

        // Condição de se um name da array é igual ao data-info do elemento que foi passado o mouse
        // Se o find retornar algo ele vai aplicar os conteúdos 
        if(result) {

            // Animation
            containerShowSkill.classList.remove("show")
            // Fazer com que remove + add de classes animadas funcionem toda vez
            void containerShowSkill.offsetWidth

            // Aplica a classe "fade-in" e depois ativa a animação com um pequeno atraso
            containerShowSkill.classList.add("fade-in")

            containerShowSkill.classList.add("show")
           

            heading.textContent = result.name
            content.textContent = result.info

        } else {
            heading.textContent = "Informação não encontrada"
        }
    })

    elemento.addEventListener("mouseout" , () => {
        containerLanguage.style.display = 'none'
    })
})