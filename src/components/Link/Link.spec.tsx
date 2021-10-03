import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import Link from '.';

describe('<Link />', () => {
  it('should render the Link', () => {
    const { container } = renderWithTheme(<Link to="/" label="I am a link" />);

    expect(screen.getByLabelText(/I am a link/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Is accessible by tab', () => {
    renderWithTheme(<Link to="/" label="I am a link" />);

    const link = screen.getByLabelText(/I am a link/i);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(link).toHaveFocus();
  });
});
