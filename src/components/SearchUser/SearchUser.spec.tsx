import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchUser from '.';

describe('SignIn Component', () => {
  const setIsSearchingUser = jest.fn();

  beforeEach(() => {
    setIsSearchingUser.mockClear();
    render(<SearchUser setIsSearchingUser={setIsSearchingUser} />);
  });

  it('should render no users result', () => {
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('should allow user to search user', async () => {
    const user = userEvent.setup();

    await user.type(
      screen.getByRole('textbox', {
        name: /search user/i,
      }),
      'test',
    );

    await waitFor(() => [expect(screen.getByDisplayValue(/test/i))]);
  });

  it('should return to Sign Up page', async () => {
    const user = userEvent.setup();

    await user.click(
      screen.getByRole('button', {
        name: /go back/i,
      }),
    );

    await waitFor(() => [expect(setIsSearchingUser).toHaveBeenCalled()]);
  });
});
