import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiPlus } from 'react-icons/fi';

import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium Button size by default', () => {
    const { container } = renderWithTheme(<Button label="button label" />);

    expect(screen.getByRole('button', { name: /button label/i })).toHaveStyle({
      padding: '2.5rem 4rem 2.5rem 4rem',
      'font-size': '1.1rem',
      height: '3rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small Button size if prop is passed', () => {
    renderWithTheme(<Button label="button label" size="sm" />);

    expect(screen.getByRole('button', { name: /button label/i })).toHaveStyle({
      padding: '2px 2.5rem 3px 2.5rem',
      'font-size': '0.8rem',
      height: '2.5rem',
    });
  });
});

it('should render the large Button size if prop is passed', () => {
  renderWithTheme(<Button label="button label" size="lg" />);

  expect(screen.getByRole('button', { name: /button label/i })).toHaveStyle({
    padding: '3rem 5rem 3rem 5rem',
    'font-size': '1.25rem',
    height: '4rem',
  });
});

it('should have fullwidth if prop is passed', () => {
  renderWithTheme(<Button label="button label" fullWidth />);

  expect(screen.getByRole('button', { name: /button label/i })).toHaveStyle({
    width: '100%',
  });
});

it('should render an icon if prop is passed', () => {
  renderWithTheme(
    <Button label="button label" icon={<FiPlus data-testid="icon" />} />
  );

  expect(screen.getByText(/button label/i)).toBeInTheDocument();
  expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
});

it('Is accessible by tab', () => {
  renderWithTheme(<Button label="button label" />);

  const button = screen.getByLabelText(/button label/i);
  expect(document.body).toHaveFocus();

  userEvent.tab();
  expect(button).toHaveFocus();
});
