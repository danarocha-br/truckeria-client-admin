import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';
import HelloWorld from '.';

describe('<HelloWorld />', () => {
  it('should render the heading on HelloWorld component', () => {
    const { container } = renderWithTheme(<HelloWorld />);

    expect(
      screen.getByRole('heading', { name: /Hello World/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
