import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '@/components/ProductCard/ProductCard';

// Mock useCart hook
jest.mock('@/lib/cart-context', () => ({
  useCart: () => ({
    addItem: jest.fn(),
  }),
}));

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('ProductCard', () => {
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    price: 99.99,
    image: 'https://example.com/image.jpg',
    stock: 10,
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('renders add to cart button when in stock', () => {
    render(<ProductCard {...mockProduct} />);

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  it('renders out of stock button when no stock', () => {
    render(<ProductCard {...mockProduct} stock={0} />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders product image', () => {
    render(<ProductCard {...mockProduct} />);

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
  });

  it('links to product detail page', () => {
    render(<ProductCard {...mockProduct} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/1');
  });
});

