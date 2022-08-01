module.exports = {
    type: "object",
    properties: {
        bemConcentrado: {type: "string"},
        DificilConcentrar: {type: "string"},
        consciente: {type: "integer"},
        sentindoBem: {type: "string"},
        controle: {type: "string"}
    },
    required: [
        'bemConcentrado','DificilConcentrar',
        'consciente','sentindoBem','controle'
    ],
    additionalProperties: false
}