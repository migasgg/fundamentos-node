import http from "node:http"

// - Criação usuários
// - Listagem usuários
// - Edição de usuários

// - HTTP
//    - Method HTTP
//    - URL

// GET POST PUT PATCH DELETE
// GET - Buscar um recurso do back-end
// POST - Alterar um recurso do back-end
// PUT - Atualizar um recurso do back-end
// PATCH - Atualizar uma informação especifica de um recurso do back-end
// DELETE - Deletar um recurso do back-end

// GET/users - Buscar usuário do beck-end
// POST/user - Criar um usuário do back-end

// stateful - Stateless

// cabeçalho (Requisição / Respostas) - Metadados

// HTTP status code
const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users))
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@exemple.com",
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)
