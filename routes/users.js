const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

router.get('/users', usersController.getUsers);
router.post('/create', usersController.createUser)
// router.put('/update/:id', usersController.updateUser)
router.delete('/delete/:id', usersController.deleteUser)

module.exports = router;
