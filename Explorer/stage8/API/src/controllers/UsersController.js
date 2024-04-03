const AppError = require("../utils/AppError")

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body
    // reponse.send(`Usuário: ${name} - Email: ${email} e a senha: ${password}`)
    if (!name) {
      throw new AppError("Nome é obrigatório!")
    }
    response.status(201).json({ name, email, password })
  }

  /* um controller pode ter no máximo 5 métodos/ funções
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT atualizar um registro.
   * delete - DELETE para remover um registro.
   */
}
module.exports = UsersController
