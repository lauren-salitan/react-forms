import { render } from '@testing-library/react';
import Todo from './Todo';

// Smoke Test
it('renders without crashing', () => {
  render(<Todo id="1" task="Test Todo" removeTodo={() => {}} />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<Todo id="1" task="Test Todo" removeTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
