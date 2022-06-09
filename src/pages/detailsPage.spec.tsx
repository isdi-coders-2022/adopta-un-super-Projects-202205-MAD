import { render, screen } from '@testing-library/react';

describe('Given details page', () => {
    test('should be rendered', () => {
        render(<h1>Details</h1>);

        expect(screen.getByText('Details')).toBeInTheDocument();
    });
});
