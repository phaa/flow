module.exports = {
    type: "object",
    properties: {
        escolha: {type: "string"},
        fazendo: {type: "string"},
        acontecimento: {type: "string"}
    },
    required: [
        'escolha','fazendo','acontecimento'
    ],
    additionalProperties: false
}