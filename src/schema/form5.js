module.exports = {
    type: "object",
    properties: {
        nivel: {type: "integer"},
        habilidades: {type: "integer"},
        importanciaPropria: {type: "integer"},
        importanciaOutros: {type: "integer"},
        sucesso: {type: "integer"},
        outraAtiv: {type: "integer"},
        satisfacao: {type: "integer"},
        importancia: {type: "integer"},
    },
    required: [
        'nivel','habilidades','importanciaPropria',
        'importanciaOutros','sucesso','outraAtiv',
        'satisfacao','importancia'
    ],
    additionalProperties: false
}