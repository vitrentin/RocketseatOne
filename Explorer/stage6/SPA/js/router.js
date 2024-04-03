export class Router {
  routes = {}
  add(routeName, page) {
    this.routes[routeName] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()
    // pushState: coloque um estado no historico
    window.history.pushState({}, "", event.target.href)
    // Sempre que quiser usar uma função dentro da classe
    // precisa usar o this, que se refere ao const router
    this.handle()
  }

  handle() {
    // atraves do location.pathname, obtemos os nomes dos caminhos
    const pathname = window.location.pathname
    // outra maneira de obter o pathname:
    /*
          const { pathname, host } = window.location
          desistruturar, estou tirando de dentro do objeto e
          colocando na constante o pathname,
          o pathname continua no location, só faz uma cópia
        */
    const route = this.routes[pathname] || this.routes[404]
    // busca a rota, então
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
    console.log(pathname)
  }
}
// export default new Router()
