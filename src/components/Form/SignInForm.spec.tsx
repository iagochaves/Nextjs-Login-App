import { render, screen, waitFor } from '@testing-library/react';
import SignInForm from './SignInForm';
import userEvent from '@testing-library/user-event';

describe('SignIn Component', () => {
  const handleOnSubmit = jest.fn();

  beforeEach(() => {
    handleOnSubmit.mockClear();
    render(<SignInForm handleOnSubmit={handleOnSubmit} />);
  });

  it('should have email address label', () => {
    const labelValue = screen.getByLabelText('Email address');
    expect(labelValue.getAttribute('name')).toBe('emailAddress');
  });

  it('should allow user to fill the form', async () => {
    const user = userEvent.setup();

    await user.type(
      screen.getByRole('textbox', {
        name: /email address/i,
      }),
      'testing-user@test.com',
    );
    await user.type(screen.getByLabelText(/password/i), '123');

    await waitFor(() => [
      expect(screen.getByDisplayValue(/testing-user@test.com/i)),
      expect(screen.getByDisplayValue(/123/i)),
    ]);
  });
});
