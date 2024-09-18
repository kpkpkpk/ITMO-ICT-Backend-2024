import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, AllowNull, HasMany } from 'sequelize-typescript';
import { Product } from "../products/Product";


@Table({
  tableName: 'Sale'
})
export class Sale extends Model<Sale> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    title: string;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.DATE)
    startDate: Date;

    @Column(DataType.DATE)
    endDate: Date;

    @HasMany(() => Product)
    products: Product[];
}
