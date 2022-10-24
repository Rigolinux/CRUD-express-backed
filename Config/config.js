
//variables de entorno
import dotenv from "dotenv";

dotenv.config();

//exportar la variable de entorno

export const URIConnector = process.env.Dbconnection;
export const PORT = process.env.PORT || 4000;

//cloudinary config enviroment variables
export const cloud_name= process.env.CLOUDINARY_CLOUD_NAME
export const api_key =process.env.CLOUDINARY_API_KEY
export const api_secret= process.env.CLOUDINARY_API_SECRET
