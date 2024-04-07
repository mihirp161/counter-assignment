// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  // Get the increment button
  const incrementButton = screen.getByText('+');

  // Click the increment button
  fireEvent.click(incrementButton);

  // Assert that the count has been incremented to 1
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  // Get the decrement button
  const decrementButton = screen.getByText('-');

  // Click the decrement button
  fireEvent.click(decrementButton);

  // Assert that the count has been decremented to -1
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
