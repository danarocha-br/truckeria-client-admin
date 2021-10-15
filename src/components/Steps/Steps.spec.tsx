import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Stepper from '.';

const steps = [
  {
    label: 'Basic info',
    to: '/',
  },
  {
    label: 'Contact info',
    to: '/',
    isActive: true,
  },
  {
    label: 'Some other info',
    to: '/',
  },
];

describe('<Stepper />', () => {
  it('should render the Stepper', () => {
    const { container } = renderWithTheme(<Stepper steps={steps} />);

    expect(screen.getByLabelText(/Contact info/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
