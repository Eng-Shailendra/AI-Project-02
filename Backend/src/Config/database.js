import mongoose from "mongoose";

export async function connectdb(params) {
    try {
        await mongoose.connect(process.env.MOGODB_IRL)
        console.log("Database conneceted successfully ");
    } catch (err) {
        console.log(err)
    }
}
export default connectdb;