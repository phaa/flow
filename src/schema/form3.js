module.exports = {
    type: "object",
    properties: {
        estadoEspirito: {type: "string"},
        alertaSonolento: {type: "integer"},
        felizTriste: {type: "integer"},
        irritadoAnimado: {type: "integer"},
        forteFraco: {type: "integer"},
        ativoPassivo: {type: "integer"},
        solitarioSociavel: {type: "integer"},
        EnvergonhadoOrgulhoso: {type: "integer"},
        envolvidoDistante: {type: "integer"},
        entusiasmadoEntendiado: {type: "integer"},
        fechadoAberto: {type: "integer"},
        claroConfuso: {type: "integer"},
        tensoRelaxado: {type: "integer"},
        competitivoCooperativo: {type: "integer"},
        dorDesconforto: {type: "integer"},
    },
    required: [
        'estadoEspirito','alertaSonolento',
        'felizTriste','irritadoAnimado','forteFraco',
        'ativoPassivo','solitarioSociavel','EnvergonhadoOrgulhoso',
        'envolvidoDistante','entusiasmadoEntendiado',
        'fechadoAberto','claroConfuso','tensoRelaxado',
        'competitivoCooperativo','dorDesconforto'
    ],
    additionalProperties: false
}