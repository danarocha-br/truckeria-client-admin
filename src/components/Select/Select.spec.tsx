import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import { renderHook } from '@testing-library/react-hooks';

import { renderWithTheme } from 'utils/tests/helpers';

import Select from '.';

describe('<Select />', () => {
  const { result } = renderHook(() => useForm());
  const methods = result.current;

  it('should render the Select', () => {
    const { container } = renderWithTheme(
      <FormProvider {...methods}>
        <form>
          <Select
            label="Label"
            id="field"
            name="field"
            options={[{ label: '1', value: '1' }]}
          />
        </form>
      </FormProvider>
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Is accessible by tab', () => {
    renderWithTheme(
      <FormProvider {...methods}>
        <form>
          <Select
            label="Label"
            id="field"
            name="field"
            options={[{ label: '1', value: '1' }]}
          />
        </form>
      </FormProvider>
    );

    const input = screen.getByRole('combobox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
