import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import { renderHook } from '@testing-library/react-hooks';

import { renderWithTheme } from 'utils/tests/helpers';

import Textarea from '.';

describe('<Textarea />', () => {
  const { result } = renderHook(() => useForm());
  const methods = result.current;

  it('should render the TextInput with Label', () => {
    renderWithTheme(
      <FormProvider {...methods}>
        <form>
          <Textarea label="Label" id="field" name="field" />
        </form>
      </FormProvider>
    );

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Is accessible by tab', () => {
    renderWithTheme(
      <FormProvider {...methods}>
        <form>
          <Textarea label="Label" id="field" name="field" />
        </form>
      </FormProvider>
    );

    const input = screen.getByLabelText('Label');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('does not edit the value when input is disabled', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <FormProvider {...methods}>
        <form>
          <Textarea label="Label" id="field" name="field" disabled />
        </form>
      </FormProvider>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'this is a text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInput).not.toHaveBeenCalled();
  });

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(
      <FormProvider {...methods}>
        <form>
          <Textarea label="Label" id="field" name="field" disabled />
        </form>
      </FormProvider>
    );

    const input = screen.getByLabelText('Label');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
