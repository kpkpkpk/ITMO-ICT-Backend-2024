import { Request, Response } from 'express';
import SaleService from '../../services/sale/saleService';

class SaleController {
    async createSale(req: Request, res: Response) {
        try {
            const { title, description, startDate, endDate } = req.body;
            const sale = await SaleService.createSale(title, description, new Date(startDate), new Date(endDate));
            res.status(201).json(sale);
        } catch (error) {
            if ( error instanceof Error){
                res.status(500).json({ message: error.message });
            }
        }
    }

    async addProductToSale(req: Request, res: Response) {
        try {
            const { saleId, productId } = req.params;
            await SaleService.addProductToSale(Number(saleId), Number(productId));
            res.status(200).json({ message: 'Product added to sale successfully' });
        } catch (error) {
            if ( error instanceof Error){
                res.status(500).json({ message: error.message });
            }
        }
    }

    async removeProductFromSale(req: Request, res: Response) {
        try {
            const { productId } = req.params;
            await SaleService.removeProductFromSale(Number(productId));
            res.status(200).json({ message: 'Product removed from sale successfully' });
        } catch (error) {
            if ( error instanceof Error){
                res.status(500).json({ message: error.message });
            }
        }
    }

    async getProductsBySale(req: Request, res: Response) {
        try {
            const { saleId } = req.params;
            const products = await SaleService.getProductsBySale(Number(saleId));
            res.status(200).json(products);
        } catch (error) {
            if ( error instanceof Error){
                res.status(500).json({ message: error.message });
            }
        }
    }

    async getSaleById(req: Request, res: Response) {
        try {
            const { saleId } = req.params;
            const sale = await SaleService.getSaleById(Number(saleId));
            if (!sale) {
                return res.status(404).json({ message: 'Sale not found' });
            }
            res.status(200).json(sale);
        } catch (error) {
            if ( error instanceof Error){
                res.status(500).json({ message: error.message });
            }
        }
    }
}

export default SaleController;
