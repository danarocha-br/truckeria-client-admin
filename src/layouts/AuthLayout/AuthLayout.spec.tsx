import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import AuthLayout from '.';

type mockSample = {
  src: string;
  alt: string;
};

jest.mock('next/image', () => ({ src, alt }: mockSample) => (
  <img src={src} alt={alt} />
));

describe('<AuthLayout />', () => {
  it('should render the AuthLayout with a title', () => {
    const { container } = renderWithTheme(
      <AuthLayout
        to="/sign-up"
        linkLabel="I don't have an account"
        title="Welcome back!"
      >
        <p>hey</p>
      </AuthLayout>
    );

    expect(
      screen.getByRole('heading', { name: /Welcome back!/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a link', () => {
    renderWithTheme(
      <AuthLayout
        to="/sign-up"
        linkLabel="I don't have an account"
        title="Welcome back!"
      >
        <p>hey</p>
      </AuthLayout>
    );

    expect(
      screen.getByLabelText(/I don't have an account/i)
    ).toBeInTheDocument();
  });
});

it('should render children', () => {
  renderWithTheme(
    <AuthLayout
      to="/sign-up"
      linkLabel="I don't have an account"
      title="Welcome back!"
    >
      <button>click here</button>
    </AuthLayout>
  );

  expect(
    screen.getByRole('button', { name: /click here/i })
  ).toBeInTheDocument();
});
