import express from "express"

import { candidateController } from "../../controller/candidateController.js"
const router = express.Router()

router.post('/api/end-election', candidateController.Register)

export default router