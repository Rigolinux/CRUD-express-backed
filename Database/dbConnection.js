import mongoose from "mongoose";



//Load env variables
import { URIConnector } from "../Config/config.js";



export const dbConnect =async () =>{

await mongoose.connect(URIConnector).then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Connection failed");
});
}