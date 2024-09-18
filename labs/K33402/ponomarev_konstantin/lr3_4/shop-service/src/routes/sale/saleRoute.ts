import express from 'express';
import SaleController from '../../controllers/sale/saleController';


const router = express.Router();

const saleController = new SaleController();

router.post('/', (req, res) => {
    saleController.createSale(req, res);
});

router.post('/:saleId/products/:productId', (req, res) => {
    saleController.addProductToSale(req, res);
});

router.delete('/products/:productId', (req, res) => {
    saleController.removeProductFromSale(req, res);
});

router.get('/:saleId/products', (req, res) => {
    saleController.getProductsBySale(req, res);
});

router.get('/:saleId', (req, res) => {
    saleController.getSaleById(req, res);
});


export default router;
