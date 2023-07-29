import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders counter button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();
});

test('count increases on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/count is 1/i);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders vite docs link', () => {
  render(<App />);
  const linkElement = screen.getByText(/vite docs/i);
  expect(linkElement).toBeInTheDocument();
});
