const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

// function myMiddleware(request, response, next) {
//   // if (!request.body.isAdmin) {
//   //   return response.json({ message: "user unauthorized" })
//   // }
//   next()
// }

const usersController = new UsersController()
// aplicar para todas rotas de usuário:
// usersRoutes.use(myMiddleware)
// para uma rota
// usersRoutes.post("/", myMiddleware, usersController.create)
usersRoutes.post("/", usersController.create)

module.exports = usersRoutes
