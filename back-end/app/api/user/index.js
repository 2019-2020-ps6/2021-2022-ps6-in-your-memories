const { Router } = require('express')

const { User } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

router.get('/', (req, res) => {
    try{
        res.status(200).json(User.get())
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.get('/:id', (req, res) => {
    try{

        res.status(200).json(User.getById(req.params.id))
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.post('/', (req, res) => {
    try {
        if (User.get().find((i) => i.firstName === req.body.firstName && i.lastName === req.body.lastName)) {
            throw new ValidationError("Erreur l'utilisateur existe déjà", "Erreur l'utilisateur existe déjà");
        }

        if (!req.body.email || !req.body.mdp) {
            throw new ValidationError("L'utilisateur doit avoir un mdp et un email",
                "L'utilisateur doit avoir un mdp et un email");
        }
        const user = User.create({...req.body})
        res.status(201).json(user);
    } catch (err) {
        manageAllErrors(res, err)
    }
})


module.exports = router
