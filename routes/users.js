const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

router.get('/users', usersController.getAll);
// //POST update a user by its id
// router.post('/update/:id', userController.updateUser)
//
// //POST delete a user by its id
// router.post('/delete/:id', userController.deleteUser)
//
// //POST create a new user
// router.post('/', userController.createUser)

module.exports = router;
