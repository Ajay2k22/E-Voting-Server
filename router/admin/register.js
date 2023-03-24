import express from "express"
import adminRegister from "../../models/adminRegister.js"
import { adminRegisterController } from "../../controller/adminRegisterController.js"
const router = express.Router()

router.post('/api/admin-register', adminRegisterController.Register)
router.post('/api/admin-login', adminRegisterController.getter)

export default router