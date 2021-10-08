import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Tag from '.';

describe('<Tag />', () => {
  it('should render the Tag', () => {
    const { container } = renderWithTheme(<Tag label="I am a label" />);

    expect(screen.getByLabelText(/I am a label/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
