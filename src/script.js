
// Selecionar elementos
const skills = document.querySelectorAll(".icon-skill")
const containerLanguage = document.querySelector(".show-skill")
const heading = document.querySelector("#heading")
const content = document.querySelector("#content-language")
const containerShowSkill = document.querySelector(".show-skill")


// Array de informações
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
    },
    {
        name: "GitHub",
        info: "Plataforma online para hospedar e colaborar em projetos com Git."
    }
]


// Eventos 
skills.forEach( (elemento) => {
    elemento.addEventListener("mouseover" , () => {
        containerLanguage.style.display = 'block'

        const dataInfo = elemento.getAttribute('data-info')

        // Verifica se o elemento que foi passado o mouse possui alguma referência no array
        const result = infos.find(el => el.name.toLowerCase() === dataInfo)

        // Condição de se um name da array é igual ao data-info do elemento que foi passado o mouse
        // Se o find retornar algo ele vai aplicar os conteúdos

        if(result) {

            // Prepara para nova animação
            containerShowSkill.classList.remove("fade-out");
            containerShowSkill.classList.remove("hide");
            containerShowSkill.classList.remove("hidden");
            void containerShowSkill.offsetWidth;

            
            containerShowSkill.classList.add("fade-in")
            containerShowSkill.classList.add("show")
           
            heading.textContent = result.name
            content.textContent = result.info

        } else {
            heading.textContent = "Informação não encontrada"
        }
    })

    elemento.addEventListener("mouseout", () => {
        containerShowSkill.classList.remove("fade-in")
        containerShowSkill.classList.remove("show")
        containerShowSkill.classList.remove("fade-out", "hide", "hidden");
        
        void containerShowSkill.offsetWidth

        // Inicia a animação de saída
        containerShowSkill.classList.add("fade-out")
        containerShowSkill.classList.add("hide")

        // Quando terminar a animação de saída
        const onTransitionEnd = () => {
            containerShowSkill.classList.add("hidden");
            
            containerShowSkill.removeEventListener("transitionend", onTransitionEnd);
      };
  
      containerShowSkill.addEventListener("transitionend", onTransitionEnd);
    })
      
})