import express from "express"
import dotenv from "dotenv";
import { connectdb } from "./config/db.js";
import router from "./routes/user.routes.js";


const app = express();
dotenv.config();

const port = process.env.PORT || 8001
app.use(express.json());

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     Credential: true,
// }));
app.use("/", router);
app.get("/", (req, res) => {
    res.status(200).json({"message": "Hi! from auth-services"})
});

app.listen(port, ()=>{
    connectdb();
    console.log("port is running on: ", port)
});