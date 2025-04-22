import { ProductsController } from './products.controller';
import { vi } from 'vitest';

const mockRepo = {
    read: vi.fn().mockResolvedValueOnce([]),
    readById: vi.fn().mockResolvedValueOnce([]),
    create: vi.fn().mockResolvedValueOnce([]),
    update: vi.fn().mockResolvedValueOnce([]),
    delete: vi.fn().mockResolvedValueOnce([]),
};

describe('roductsController', () => {
    const productsRepo = new ProductsController(mockRepo);

    test('Should be defined', () => {
        //Assert
        expect(productsRepo).toBeDefined();
        expect(productsRepo).toBeInstanceOf(ProductsController);
    });
});
