import mongoose from "mongoose"
const connectDb = () => {
    const url = "mongodb+srv://ajay:ajay2k23@cluster0.uypglua.mongodb.net/evoting?retryWrites=true&w=majority";
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => (
        console.log("Database is Connected Sucessfully")
    )).catch((e) => {
        console.log(e)
    })
}

export default connectDb