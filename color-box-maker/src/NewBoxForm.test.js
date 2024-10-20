import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// Smoke Test
it('renders without crashing', () => {
  render(<NewBoxForm addBox={() => {}} />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Business Logic Test: Adding a box through form
it('allows a user to submit the form', () => {
  const mockAddBox = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={mockAddBox} />);

  fireEvent.change(getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Height:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Color:'), { target: { value: 'blue' } });
  fireEvent.click(getByText('Add Box'));

  expect(mockAddBox).toHaveBeenCalledWith({
    width: '100',
    height: '100',
    color: 'blue',
    id: expect.any(String),
  });
});
