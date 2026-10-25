# Prueba Cafetería Nanacao: Testing con Jest y supertest

Tests unitarios de una API REST de cafés con Express.

## Instalación y ejecución

```bash
npm install
npm test
```

## Tests incluidos

| Ruta | Qué comprueba |
|---|---|
| GET /cafes | Status 200 y arreglo con al menos 1 objeto |
| DELETE /cafes/:id | Status 404 si el id no existe |
| POST /cafes | Agrega un café y devuelve 201 |
| PUT /cafes/:id | Status 400 si el id del parámetro difiere del payload |
