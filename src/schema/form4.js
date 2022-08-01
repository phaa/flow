module.exports = {
    type: "object",
    properties: {
        comQuem: {type: "string"},
        quantos: {type: "integer"}
    },
    required: ['comQuem','quantos'],
    additionalProperties: false
}