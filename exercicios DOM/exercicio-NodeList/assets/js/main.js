const paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll("p")

const estilosBody = getComputedStyle(document.body)
const bgColor = estilosBody.backgroundColor

console.log(bgColor)

for (p of ps) {
    p.style.backgroundColor = bgColor
    p.style.color = 'white'
}   