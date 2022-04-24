const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const PatientRouter = require('./patient')
const UserRouter = require('./user')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/patient', PatientRouter)
router.use('/user', UserRouter)


module.exports = router
