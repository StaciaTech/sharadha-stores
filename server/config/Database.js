import mongoose from "mongoose"

//database connection

export function MongoConnect() {
    const connectionParams = {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Conneted to The MongoDB dataBase")
    } catch (error) {
        console.log(error)
    }
}
