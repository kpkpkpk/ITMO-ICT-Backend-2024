import express from 'express';
import ProductController from '../../controllers/product/productController';


const router = express.Router();

const productsController = new ProductController();

router.post('/', (req, res) => {
    productsController.createProduct(req, res);
  });
  
  router.get('/:productId', (req, res) => {
    productsController.getProductById(req, res);
  });
  
  router.get('/', (req, res) => {
    productsController.getAllProducts(req, res);
  });
  
  router.put('/:productId', (req, res) => {
    productsController.updateProduct(req, res);
  });
  
  router.delete('/:productId', (req, res) => {
    productsController.deleteProduct(req, res);
  });
  
  router.get('/:productId/orders', (req, res) => {
    productsController.getOrdersByProductId(req, res);
  });
  
  router.get('/:productId/stock', (req, res) => {
     productsController.getProductStockQuantity(req, res);
  });
  

export default router;