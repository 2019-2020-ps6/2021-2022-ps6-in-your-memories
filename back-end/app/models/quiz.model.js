const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  id: Joi.string(),
  theme: Joi.string().required(),
  name: Joi.string().required(),
  questions: Joi.any(),
  nbPlay: Joi.number().required(),
})
