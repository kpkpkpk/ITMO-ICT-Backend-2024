import {Sale} from "../../models/sale/Sale";
import {Product} from "../../models/product/Product";

class SaleService {
    async createSale(title: string, description: string, startDate: Date, endDate: Date): Promise<Sale> {
        return await Sale.create({
            title,
            description,
            startDate,
            endDate,
        });
    }

    async addProductToSale(saleId: number, productId: number): Promise<void> {
        const sale = await Sale.findByPk(saleId);
        if (!sale) {
            throw new Error('Sale not found');
        }

        const product = await Product.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }

        await product.update({ saleId });
    }

    async removeProductFromSale(productId: number): Promise<void> {
        const product = await Product.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }

        await product.update({ saleId: null });
    }

    async getProductsBySale(saleId: number): Promise<Product[]> {
        const sale = await Sale.findByPk(saleId, {
            include: [Product],
        });
        if (!sale) {
            throw new Error('Sale not found');
        }

        return sale.products;
    }

    async getSaleById(saleId: number): Promise<Sale | null> {
        return await Sale.findByPk(saleId);
    }
}

export default new SaleService();
