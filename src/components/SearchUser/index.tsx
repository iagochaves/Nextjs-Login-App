import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { SignInScheme } from '../../utils/validations.scheme';
import { SearchIcon, ArrowLeftIcon } from '@heroicons/react/outline';

type UserData = SignInScheme[];

type SearchUserProps = {
  setIsSearchingUser: (isSearchingUser: boolean) => void;
};

const SearchUser: React.FC<SearchUserProps> = ({ setIsSearchingUser }) => {
  const [users, setUsers] = useState<UserData>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await api.get<UserData>('/users');
      setUsers(data);
    };

    getAllUsers();
  }, []);

  const handleSearchUser = async (emailAddress: string) => {
    const { data } = await api.get<UserData>('/users', {
      params: {
        emailAddress_like: emailAddress,
      },
    });

    if (data) {
      setUsers(data);
    }
  };

  return (
    <div className="max-w-md w-full">
      <button
        onClick={() => setIsSearchingUser(false)}
        className="text-sm mb-3 flex items-center space-x-2 text-indigo-500 hover:underline"
      >
        <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
        <p>Go back</p>
      </button>
      <div className="p-4 space-y-4 rounded-md shadow-md">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <SearchIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />

          <input
            aria-label="Search user"
            className="pr-3 pl-10 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            onChange={(event) => handleSearchUser(event.target.value)}
            placeholder="Start typing to search a user email"
            type="text"
          />
        </div>
        {users.length ? (
          <table className="divide-y w-full table-auto ">
            <thead>
              <tr>
                <th>Email Address</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((user) => (
                <tr key={user.emailAddress}>
                  <td className="py-2">{user.emailAddress}</td>
                  <td className="py-2">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No users found</p>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
