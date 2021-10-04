import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the Heading', () => {
    const { container } = renderWithTheme(<Heading>Hey there</Heading>);

    expect(
      screen.getByRole('heading', { name: /Hey there/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
