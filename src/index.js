/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = 'https://platzi-avo.vercel.app'

// En el HTML cree un div con id 'app'
const appNote = document.querySelector('.app')

// Api Intl
// 1 - formato a fechas
// 2 - formato monedas
const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return newPrice
}

//web api
//conectarnos al servidor
window
.fetch(`${baseUrl}/api/avo`)
//Procesar la respueta, y convertirla en JSON
.then(respuesta => respuesta.json())
//JSON -> DATA -> Renderizar info browser
.then((responseJson) => {
    const todasLaImagenes = []
    responseJson.data.forEach((item) => {
        //Crear imagen
        const imagen = document.createElement('img')
        imagen.src = `${baseUrl}/${item.image}`
        imagen.className = "imageAvocado"

        //Crear titulo
        const title = document.createElement('h2')
        title.textContent = item.name
        title.className = "avocadoName"

        //Crear precio
        const price = document.createElement('div')
        price.textContent = formatPrice(item.price)
        price.className = "avocadoPrice"

        const containerNamePrice = document.createElement('div')
        containerNamePrice.append(title, price)
        containerNamePrice.className = "containerNamePrice"

        const container = document.createElement('div')
        container.append(imagen, containerNamePrice)
        container.className = "avocadoContainer"

        todasLaImagenes.push(container)
    })

    appNote.append(...todasLaImagenes)
})