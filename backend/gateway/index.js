import express from "express"
import dotenv from "dotenv";
import morgan from "morgan";
import proxy from "express-http-proxy";
import cors from "cors";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    Credential: true,
}));
app.use(morgan("dev"));

app.use("/api/auth", proxy(process.env.AUTH_SERVICE));

app.get("/", (req, res) => {
    res.status(200).json({"message": "Hi! from gateway"})
});

app.listen(port, ()=>{
    console.log("port is running on: ", port)
});