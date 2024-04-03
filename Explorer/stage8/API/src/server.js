require("express-async-errors")

const AppError = require("./utils/AppError")

const express = require("express")

const routes = require("./routes")

const app = express()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

// app.get("/message/:id/:user", (request, response) => {
//   // Desistruturar
//   const { id, user } = request.params
//   response.send(`Mensagem ID: ${id}.
//   Para o usuário: ${user}.`)
//   //  response.send(`Mensagem ID: ${request.params.id}.
//   // Para o usuário: ${request.params.user}.`)
// })

// app.get("/users", (request, reponse) => {
//   const { page, limit } = request.query

//   reponse.send(`Página: ${page}. Mostrar: ${limit}`)
// })
