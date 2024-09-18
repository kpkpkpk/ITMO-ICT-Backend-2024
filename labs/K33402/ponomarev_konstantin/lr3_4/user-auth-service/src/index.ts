import express from "express";
import userRoute from "./routes/users/userRoute";
import Sequelize from "./providers/db";
import dotenv from "dotenv";
import {connectToRabbitMQ} from "../rabbitmq";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/users", userRoute);

app.listen(PORT, () => {
    Sequelize;
    console.log(`Server is running on port ${PORT}`);
});
