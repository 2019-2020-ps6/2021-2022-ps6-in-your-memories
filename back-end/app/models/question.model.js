const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
    label: Joi.string().required(),
    id: Joi.string(),
    answers: Joi.array(),
    indice: Joi.string,
})
