import express from 'express';
import userRoute from "./routes/users/userRoute";
import discountRoute from "./routes/discounts/discountsRoute";
import ordersRoutes from './routes/orders/ordersRoute';
import productsRoutes from './routes/products/productsRoute';
import saleRoutes from './routes/sale/saleRoute';
import Sequelize from "./providers/db"
import dotenv from 'dotenv'
import authenticateToken from './middleware/authenticateToken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); 

app.use('/discount', authenticateToken, discountRoute);
app.use('/order', authenticateToken, ordersRoutes);
app.use('/product', productsRoutes);
app.use('/sale', authenticateToken, saleRoutes);
app.use('/user', userRoute);


app.listen(PORT, () => {
  Sequelize
  console.log(`Server is running on port ${PORT}`);
});