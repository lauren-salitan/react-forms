import { render } from '@testing-library/react';
import Box from './Box';

// Smoke Test
it('renders without crashing', () => {
  render(<Box id="1" width={100} height={100} color="blue" removeBox={() => {}} />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<Box id="1" width={100} height={100} color="blue" removeBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
