import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from './SignUpForm';

describe('SignUp Component', () => {
  const handleOnSubmit = jest.fn();

  beforeEach(() => {
    handleOnSubmit.mockClear();
    render(<SignUpForm handleOnSubmit={handleOnSubmit} />);
  });

  it('should have password and password confirmation label', () => {
    const passwordLabel = screen.getByLabelText('Password');
    const passwordConfirmationLabel =
      screen.getByLabelText(/confirm password/i);

    expect(passwordLabel.getAttribute('name')).toBe('password');
    expect(passwordConfirmationLabel.getAttribute('name')).toBe(
      'passwordConfirmation',
    );
  });

  it('should allow user to fill the form', async () => {
    const user = userEvent.setup();

    await user.type(
      screen.getByRole('textbox', {
        name: /email address/i,
      }),
      'testing-user@test.com',
    );
    await user.type(screen.getByLabelText('Password'), '123');
    await user.type(screen.getByLabelText(/confirm password/i), '123');

    await waitFor(() => [
      expect(screen.getByDisplayValue(/testing-user@test.com/i)),
      expect(screen.getAllByDisplayValue(/123/i)),
    ]);
  });
});
