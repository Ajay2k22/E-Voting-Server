import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true,
        unique: true
    },
    numVotes: {
        type: String,
        required: true
    }
}, { timestamps: true });

const candidateRegister = mongoose.model('candidate', userSchema);
export default candidateRegister
