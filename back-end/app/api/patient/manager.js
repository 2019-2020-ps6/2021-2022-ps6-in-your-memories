const {User, Patient} = require('../../models')
const NotFoundError = require('../../utils/errors/not-found-error.js')


const filterPatientFromUser = (userId) => {
    const patient = Patient.get()
    const parsedId = parseInt(userId, 10)
    return patient.filter((patient) => patient.userId === parsedId)
}

const getPatientFromUser = (userId) => {
    // Check if quizId exists, if not it will throw a NotFoundError
    const user = User.getById(userId)
    const userIdint = parseInt(userId, 10)
    const patient = Patient.get()
    if (patient.userId !== userIdint) throw new NotFoundError(`${patient.name} id=${patientId} was not found for ${user.name} id=${user.userId} : not found`)
    return patient
}

module.exports = {
    filterPatientFromUser,
    getPatientFromUser,
}
