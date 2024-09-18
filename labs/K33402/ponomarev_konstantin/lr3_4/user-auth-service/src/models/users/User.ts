import {
    Table,
    Column,
    Model,
    Unique,
} from "sequelize-typescript";


@Table({
    tableName: "Users",
})
export class User extends Model<User> {
    @Column
    name: string;

    @Unique
    @Column
    email: string;

    @Column
    password: string;
}
