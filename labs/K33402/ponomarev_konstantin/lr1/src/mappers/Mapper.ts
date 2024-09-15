import {Model} from "sequelize-typescript";
import Dto from "../dtos/Dto";

export default interface Mapper<E extends Model> {
    toDto(entity: E): Dto<E>;
}
