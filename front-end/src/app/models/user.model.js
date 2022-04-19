const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  id: Joi.number().required(),
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  email: Joi.string().required(),
  mdp: Joi.string().required(),

})
