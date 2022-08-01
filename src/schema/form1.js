module.exports = {
    type: "object",
    properties: {
        data: {type: "string"},
        hora: {type: "string"},
        horaNotificacao: {type: "integer"},
        pensando: {type: "string"},
        local: {type: "string"},
        fazendo: {type: "string"},
        outrasCoisas: {type: "string"},
        porque: {type: "string"},
        tinha: {type: "string"},
        queria: {type: "string"},
        naoTinha: {type: "string"}
    },
    required: [
        'data','hora','horaNotificacao','pensando',
        'local','fazendo','outrasCoisas','porque',
        'tinha','queria','naoTinha'
    ],
    additionalProperties: false
}