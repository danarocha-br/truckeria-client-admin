import { renderWithTheme } from 'utils/tests/helpers';

import Form from '.';
import Button from 'components/Button';

describe('<Form />', () => {
  it('should render the Form', () => {
    const { container } = renderWithTheme(
      <Form onSubmit={() => console.log('submit')} data-testid="form">
        <input type="text" />
        <Button label="Send" color="success" type="submit"></Button>
      </Form>
    );

    expect(container.querySelector('form')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
