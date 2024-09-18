import express from 'express';
import { UserController } from '../../controllers/user/userController';

const router = express.Router();

const userController = new UserController();

router.post('/register', (req, res) => {
  userController.register(req, res);
});

router.post('/login', (req, res) => {
  userController.login(req, res);
});

router.get('/users', (req, res) => {
    userController.getAllUsersWithOrders(req, res);
});

export default router;
