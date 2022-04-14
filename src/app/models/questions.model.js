const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  id: Joi.number().required(),
  question: Joi.string().required(),
  reponses: module.exports = new BaseModel('Reponse', {
    value: Joi.string().required,
    isCorrect: Joi.boolean().required,
  }),
  indice: Joi.string().required(),
})
