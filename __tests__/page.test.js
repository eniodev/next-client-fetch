import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages';

describe('Home', () => {
  it('checks the <h1> logo of the page', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Fetch store');
    expect(heading).toBeInTheDocument();
  });
});
