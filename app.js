import express from "express";

//file upload
import fileUpload from "express-fileupload";

//routes
import postRoutes from "./routes/post.routes.js";

const app = express();

//interpreter for json data
app.use(express.json());


//file upload
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload',
}
));

app.use(postRoutes);

export default app;

