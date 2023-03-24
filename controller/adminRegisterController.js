import bcrypt from "bcrypt"
import adminRegister from "../models/adminRegister.js"
import { ErrorHandler } from "../middleware/CustomErrorHandler.js"
export const adminRegisterController = {
    async Register(req, res, next) {
        const { name, phone, adharcard, password } = req.body

        if (name.length === "" || adharcard.length != 12 || password.length < 6) {
            console.log(name.length)
            return next({ message: "Validation Error", statuscode: 401, name: "Validation Error" });
        }

        console.log(name, phone, adharcard, password)
        const hashpassword = await bcrypt.hashSync(password, 10);
        console.log(hashpassword)
        try {
            console.log(req.body)
            const result = await adminRegister.create({ name: name, phone: phone, adharcard: adharcard, password: hashpassword })
            res.status(200).json({
                msg: "Register Sucessfully",
                status:200
            })
        }
        catch (e) {
            
            return next(e)
        }

    },
    async getter(req, res, next) {
        let ispresent = await adminRegister.findOne({ adharcard: req.body.adharcard })
        if (!ispresent) {

            return next({ message: "Validation Error", statuscode: 400, name: "Validation Error" })
        }

        let res1 = bcrypt.compareSync(req.body.password, ispresent.password)

        if (res1) {
            return res.status(200).json({
                msg: "Login Sucessfully",
                status: 200
            })
        } else {
            res.status(500).json({
                msg: "Unable to Login",
                status: 500
            })
        }



    }
}