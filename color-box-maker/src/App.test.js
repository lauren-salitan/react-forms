import { render } from '@testing-library/react';
import App from './App';

// Smoke Test
it('renders without crashing', () => {
  render(<App />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
