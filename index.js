
//database
import { dbConnect } from "./Database/dbConnection.js";

//env variables
import { PORT } from "./Config/config.js";

//import app
import app from "./app.js";



dbConnect();

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
