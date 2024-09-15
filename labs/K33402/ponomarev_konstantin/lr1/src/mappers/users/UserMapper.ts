import Mapper from "../Mapper";
import {User} from "../../models/users/User";
import {ReturnUserDto} from "../../dtos/UserDto";

export default class UserMapper implements Mapper<User> {
    toDto(entity: User): ReturnUserDto {
        return new ReturnUserDto(entity.id, entity.name, entity.email)
    }
}
