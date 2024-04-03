import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// const routes = {
//   "/": "/pages/home.html",
//   "/about": "/pages/about.html",
//   "/contact": "/pages/contact.html",
//   404: "/pages/404.html",
// }
// console.log(routes["/about"])

// handle()

/*
class Passaro{
  voar(){
    alert("voar")
  }
}
class Pato extends Passaro{
  constructor(){
    super()
  }
}
const pato = new Pato()
pato.voar()
Herença, pato herda o método voar da classe Pássaro

class Galinha extends Passaro{
  constructor(){
    super()
  }
  voar(){
    alert("Não voa tão bem")
  }
  Polimorfismo
}
const galinha = new Galinha()
galinha.voar()
*/
