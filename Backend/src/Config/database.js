import mongoose from "mongoose";
import dns from "dns";

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

export async function connectdb(params) {
    try {
        await mongoose.connect(process.env.MOGODB_URL)
        console.log("Database conneceted successfully ");
    } catch (err) {
        console.log(err)
    }
}
export default connectdb;