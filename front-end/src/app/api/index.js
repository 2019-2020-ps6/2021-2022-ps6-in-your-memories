const { Router } = require('express')
const Quizzesrouter = require('./quizzes')
const UserRouter = require('./users')
const PatientRouter = require('./patient')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', Quizzesrouter)
router.use('/users', UserRouter)
router.use('/patient', PatientRouter)

module.exports = router
