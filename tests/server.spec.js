const request = require("supertest")
const server = require("../index")

describe("Operaciones CRUD de cafes", () => {

  // Requerimiento 1 (3 pts)
  it("GET /cafes devuelve 200 y un arreglo con al menos 1 objeto", async () => {
    const response = await request(server).get("/cafes").send()
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBeGreaterThanOrEqual(1)
    expect(response.body[0]).toBeInstanceOf(Object)
  })

  // Requerimiento 2 (2 pts)
  it("DELETE /cafes/:id devuelve 404 si el id no existe", async () => {
    const jwt = "token de prueba"
    const idInexistente = 9999
    const response = await request(server)
      .delete(`/cafes/${idInexistente}`)
      .set("Authorization", jwt)
      .send()
    expect(response.statusCode).toBe(404)
  })

  // Requerimiento 3 (2 pts)
  it("POST /cafes agrega un nuevo café y devuelve 201", async () => {
    const id = Math.floor(Math.random() * 999) + 100
    const cafe = { id, nombre: "Café de prueba" }
    const response = await request(server).post("/cafes").send(cafe)
    expect(response.statusCode).toBe(201)
  })

  // Requerimiento 4 (3 pts)
  it("PUT /cafes/:id devuelve 400 si el id del parámetro no coincide con el del payload", async () => {
    const cafe = { id: 2, nombre: "Café con id distinto" }
    const response = await request(server).put("/cafes/1").send(cafe)
    expect(response.statusCode).toBe(400)
  })

})

