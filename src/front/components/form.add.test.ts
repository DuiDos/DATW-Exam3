import { createFormAdd } from './form.add';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Given createFormAdd', () => {
    test('From is created', () => {
        //Act
        const form = createFormAdd();
        //Assert
        expect(form).toBeInstanceOf(HTMLFormElement);
    });

    test('Submit button is clicked', () => {
        //Act
        const button = screen.getByRole('button', { name: 'Crear' });
        button.click();
        //Assert
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'submit');
    });
});
