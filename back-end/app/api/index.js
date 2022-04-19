const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const PatientRouter = require('./patient')
const QuestionsRouter = require('./quizzes/questions')
const AnswersRouter = require('./quizzes/questions/answers')
const UserRouter = require('./user')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/patient', PatientRouter)
router.use('/questions', QuestionsRouter)
router.use('/answers', AnswersRouter)
router.use('/user', UserRouter)


module.exports = router
