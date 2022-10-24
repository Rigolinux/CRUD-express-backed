import cloudinary from 'cloudinary';
import { cloud_name, api_key, api_secret } from '../Config/config.js';


//configuring cloudinary
//requiered to upload images to cloudinary specifing the cloud name, api key and api secret
cloudinary.config({
    cloud_name,
    api_key,
    api_secret
});

//upload image to cloudinary
export const uploader = async(file)=>{
    return await cloudinary.v2.uploader.upload(file,{
        folder: "MERN-CRUD"
    })
}

//delete image from cloudinary
export const destroyImage = async(public_id)=>{
    return await cloudinary.v2.uploader.destroy(public_id,{
        folder: "MERN-CRUD"
    });
}