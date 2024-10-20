import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// Smoke Test
it('renders without crashing', () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Business Logic Test: Adding a todo through form
it('allows a user to submit the form', () => {
  const mockAddTodo = jest.fn();
  const { getByLabelText, getByText } = render(<NewTodoForm addTodo={mockAddTodo} />);

  fireEvent.change(getByLabelText('New Todo:'), { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add Todo'));

  expect(mockAddTodo).toHaveBeenCalledWith({
    task: 'Test Todo',
    id: expect.any(String),
  });
});
