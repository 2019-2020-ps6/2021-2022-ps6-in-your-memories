const {User} = require('../../models')
const {filterPatientFromUser} = require("../patient/manager");


const buildUser = (userId) => {
    const user = User.getById(userId)
    const patient = filterPatientFromUser(user.id)
    return { ...user, patient }
}

const buildUsers = () => {
    const users = User.get()
    return users.map((user) => buildUser(user.id))
}

module.exports = {
    buildUser,
    buildUsers,
}
