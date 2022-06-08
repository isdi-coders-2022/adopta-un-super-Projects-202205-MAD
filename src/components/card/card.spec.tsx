import { render, screen } from '@testing-library/react';
import {Card} from './index'

describe('Given the Card element', () => {
    const mockCard = {
        userName: 'Fer',
        id: 1234,
        name: "Batman",
        thumbnail:{
            path: 'https://dfdfd',
            extension: 'png'
        }
    }

    test('should be rendered', () => {
        render(<Card superHero={mockCard} />);

        expect(screen.getByText(mockCard.name)).toBeInTheDocument();
    });
});