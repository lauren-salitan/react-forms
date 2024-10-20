import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// Smoke Test
it('renders without crashing', () => {
  render(<TodoList />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Business Logic Test: Adding a Todo
it('can add a new todo', () => {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);

  // Ensure no todo initially
  expect(queryByText('X')).toBeNull();

  // Add new todo
  fireEvent.change(getByLabelText('New Todo:'), { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add Todo'));

  // Expect the todo to be in the DOM
  expect(queryByText('Test Todo')).toBeInTheDocument();
});

// Business Logic Test: Removing a Todo
it('can remove a todo', () => {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);

  // Add new todo
  fireEvent.change(getByLabelText('New Todo:'), { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add Todo'));

  // Remove the todo
  fireEvent.click(getByText('X'));

  // Expect the todo to be removed
  expect(queryByText('Test Todo')).toBeNull();
});
