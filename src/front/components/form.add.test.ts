import { createFormAdd } from './form.add';

describe('Give createFormAdd', () => {
    test('When is create the form', () => {
        //Act
        const form = createFormAdd();
        //Assert
        expect(form).toBeInstanceOf(HTMLFormElement);
    });
});
