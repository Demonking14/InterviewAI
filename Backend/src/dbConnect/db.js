import mongoose from "mongoose";
/**
 * @name  dbConnect
 * @description function to connect with the database
 * @access public
 */
export async function dbConnect() {
    try {
        const result = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database is connected successfully having host name - ${result.connection.host}`)
    } catch (error) {
        console.log("Error in the dbConnection")
        console.log(error)
    }
}

