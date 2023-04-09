
import candidate from "../models/candidate.js"
import { ErrorHandler } from "../middleware/CustomErrorHandler.js"
export const candidateController = {
    async Register(req, res, next) {
        const { name, age, numVotes, party,elctionName } = req.body

        if (name.length === "") {
            console.log(name.length)
            return next({ message: "Validation Error", statuscode: 401, name: "Validation Error" });
        }

        console.log(name, age, numVotes, party,elctionName)

        try {
            console.log(req.body)
            const result = await candidate.create({ name: name, age: age, party: party, numVotes: numVotes,elctionName:elctionName })
            return res.status(200).json({
                msg: "Register Sucessfully"
            })
        }
        catch (e) {
            console.log(e)
            return next(e)
        }

    }
}