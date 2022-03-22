var body = document.querySelector('body')
body.addEventListener ('click', alterar_tema)

function alterar_tema() {
document.querySelector("body").classList.toggle(".dracula-theme")
}