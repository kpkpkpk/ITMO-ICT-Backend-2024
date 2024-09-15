import {Model} from "sequelize-typescript";
import {Identifier} from "sequelize";

export interface BaseService<Id extends Identifier, BaseModel extends Model, Attr> {
    findById(id: Id): Promise<BaseModel | null>;
    create(data: Attr): Promise<BaseModel>;
    deleteById(id: Id): Promise<Id>;
    updateById(id: Id, data: Attr): Promise<BaseModel>;
}