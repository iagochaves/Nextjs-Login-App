import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from '../../pages/signup';

describe('Sign Up Page', () => {
  beforeEach(() => {
    render(<SignUp />);
  });

  it('should change the form to table visualization', async () => {
    const user = userEvent.setup();

    await user.click(
      screen.getByRole('button', {
        name: /search for a user/i,
      }),
    );

    await waitFor(() => [
      expect(screen.getByText('No users found')).toBeInTheDocument(),
    ]);
  });
});
