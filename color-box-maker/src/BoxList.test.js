import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// Smoke Test
it('renders without crashing', () => {
  render(<BoxList />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Business Logic Test: Adding a Box
it('can add a new box', () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  // Ensure no box initially
  expect(queryByText('X')).toBeNull();

  // Add new box
  fireEvent.change(getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Height:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Color:'), { target: { value: 'blue' } });
  fireEvent.click(getByText('Add Box'));

  // Expect the box to be in the DOM
  expect(queryByText('X')).toBeInTheDocument();
});

// Business Logic Test: Removing a Box
it('can remove a box', () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  // Add new box
  fireEvent.change(getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Height:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Color:'), { target: { value: 'blue' } });
  fireEvent.click(getByText('Add Box'));

  // Remove the box
  fireEvent.click(getByText('X'));
  
  // Expect the box to be removed
  expect(queryByText('X')).toBeNull();
});
