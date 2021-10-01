import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Switch from '.';

describe('<Switch />', () => {
  it('should render the Switch', () => {
    const { container } = renderWithTheme(<Switch />);

    expect(
      screen.getByRole('switch', { name: /Theme Switcher/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
