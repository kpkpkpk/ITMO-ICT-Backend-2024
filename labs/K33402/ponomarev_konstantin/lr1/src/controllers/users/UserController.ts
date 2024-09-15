import UserService from "../../services/users/UserService";
import {Request, Response} from "express";
import {User, UserCreationAttributes} from "../../models/users/User";
import Mapper from "../../mappers/Mapper";
import UserMapper from "../../mappers/users/UserMapper";

export default class UserController {
    private readonly userService: UserService;
    private readonly userMapper: Mapper<User> = new UserMapper();

    constructor(userService: UserService) {
        this.userService = userService;
    }
    get = async (request: Request, response: Response) => {
        const id = Number(request.params.id);
        const user = await this.userService.findById(id);
        if (!user) {
            return response.status(404).send();
        }

        const dto = this.userMapper.toDto(user);

        return response.status(200).json(dto);
    }

    post = async (request: Request, response: Response) => {
        const body: UserCreationAttributes = request.body;

        try {
            const createdUser = await this.userService.create(body);
            const dto = this.userMapper.toDto(createdUser);
            return response.status(201).send(dto);
        } catch (e: any) {
            return response.status(400).send({"message": e.message});
        }
    }

    delete = async (request: Request, response: Response) => {
        const id = Number(request.params.id);
        const deletedRows = await this.userService.deleteById(id);
        if (deletedRows === 0) {
            return response.status(404).send();
        }

        return response.status(204).send();
    }
}
