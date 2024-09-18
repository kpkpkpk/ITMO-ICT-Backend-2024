import {Sequelize} from "sequelize-typescript";
import { PostgresDialect } from '@sequelize/postgres';
import {Discount} from "../models/discounts/Discount";
import {Order} from "../models/orders/Order";
import {Product} from "../models/products/Product";
import {Sale} from "../models/sale/Sale";

const sequelize = new Sequelize({
    database: process.env.DB_NAME || "some_db",
    dialect: 'postgres',
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    port: Number(process.env.DB_PORT) || 5432,
    host: process.env.DB_HOST || 'localhost',
    logging: console.log,
});

const models = [Discount, Order, Product, Sale];

sequelize.addModels(models);

sequelize
    .sync()
    .then(() => {
        console.log("synced models");
    })
    .catch((e) => console.log(e));

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

testConnection();

export default sequelize;
