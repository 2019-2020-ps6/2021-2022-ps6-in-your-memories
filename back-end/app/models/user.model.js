const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Patient', {
    id: Joi.number().required(),
    lastName: Joi.string(),
    firstName: Joi.string(),
    email:Joi.string().required(),
    mdp: Joi.string().required(),
})
