import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, HasMany, ForeignKey  } from 'sequelize-typescript';
import { Order } from "../orders/Order";
import { Discount } from "../discounts/Discount";
import { Sale } from "../sale/Sale";

@Table({
  tableName: 'Products'
})
export class Product extends Model<Product> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    price: number;

    @Column
    stockQuantity: number;

    @ForeignKey(() => Discount)
    @Column
    discountId?: number;

    @ForeignKey(() => Sale)
    @Column
    saleId?: number;

    @HasMany(() => Order)
    orders: Order[];
}
