import { ProductsController } from './products.controller';
import { vi, Mock } from 'vitest';

const mockRepo = {
    read: vi.fn().mockResolvedValueOnce([]),
    readById: vi.fn().mockResolvedValueOnce([]),
    create: vi.fn().mockResolvedValueOnce([]),
    update: vi.fn().mockResolvedValueOnce([]),
    delete: vi.fn().mockResolvedValueOnce([]),
};

const req = {
    params: {},
    body: {},
} as unknown as Request;

const res = {
    json: vi.fn(),
    status: vi.fn(),
} as unknown as Response;

const next = vi.fn() as NextFunction;

const error = new Error('Error');

describe('roductsController', () => {
    const productsRepo = new ProductsController(mockRepo);

    test('Should be defined', () => {
        //Assert
        expect(productsRepo).toBeDefined();
        expect(productsRepo).toBeInstanceOf(ProductsController);
    });

    describe('getAll method should be call', () => {
        test('Json should be called json when response is valid', async () => {
            //Act
            await productsRepo.getAll(req, res, next);
            //Assert
            expect(res.json).toHaveBeenCalledWith({
                results: [],
                error: '',
            });
        });
        test('Next should be called when throw an error', async () => {
            //Arrange
            (mockRepo.read as Mock).mockRejectedValueOnce(error);
            //Act
            await productsRepo.getAll(req, res, next);
            //Assert
            expect(next).toHaveBeenCalledWith(error);
        });
    });
});
