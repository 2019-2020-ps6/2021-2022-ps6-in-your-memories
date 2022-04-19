const { Router } = require('express')

const { User } = require('../../models')

const router = new Router()

router.get('/', (req, res) => {
    try{
        res.status(200).json(Patient.get())
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.get('/:id', (req, res) => {
    try{
        res.status(200).json(Patient.getById(req.params.patientId))
    } catch (err) {
        manageAllErrors(res, err)
    }
})
