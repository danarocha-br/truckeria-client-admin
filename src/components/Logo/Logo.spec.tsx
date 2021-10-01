import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the Logo', () => {
    const { container } = renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Truckeria/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
