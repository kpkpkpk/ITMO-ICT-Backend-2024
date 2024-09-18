import express from "express";
import discountRoute from "./routes/discounts/discountsRoute";
import ordersRoutes from "./routes/orders/ordersRoute";
import productsRoutes from "./routes/products/productsRoute";
import saleRoutes from "./routes/sale/saleRoute";
import userRoutes from "./routes/users/userRoute";
import Sequelize from "./providers/db";
import dotenv from "dotenv";
import authenticateToken from "./middleware/authenticateToken";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", authenticateToken, userRoutes)
app.use("/discounts", authenticateToken, discountRoute);
app.use("/orders", authenticateToken, ordersRoutes);
app.use("/products", productsRoutes);
app.use("/sale", authenticateToken, saleRoutes);

app.listen(PORT, () => {
    Sequelize;
    console.log(`Server is running on port ${PORT}`);
});
