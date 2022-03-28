// import controllers user
const userController = require('../controllers/userController.js')

// router
const router = require('express').Router()


// use routers
router.post('/addUser', userController.addUser)

router.get('/allUsers', userController.getAllUsers)

router.get('/:id', userController.getOneUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router