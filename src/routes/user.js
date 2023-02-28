const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { protect } = require('../middlewares/auth')
// const { protect } = require('../middlewares/auth')

router.get('/', userController.getData)
// router.get('/profile', protect, userController.getProfile)
router.get('/:id', userController.getProfile)
router.get('/verif/:email', userController.verif)
router.post('/register', userController.insertData)
router.post('/login', userController.login)
router.put('/activation/:email', userController.verifStatus)
router.put('/forgotpassword/:email', userController.checkEmail)
router.put('/verification/:email', userController.verifyAccount)
router.put('/resetpassword/:email', userController.changePassword)
router.delete('/:id', protect, userController.deleteData)

module.exports = router