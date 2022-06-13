import { SearchIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import SignUpForm from '../../components/Form/SignUpForm';
import { api } from '../../services/api';
import { SignUpScheme } from '../../utils/validations.scheme';
import { useState } from 'react';
import SearchUser from '../../components/SearchUser';

const SignUp: React.FC = () => {
  const [isSearchingUser, setIsSearchingUser] = useState(false);

  const router = useRouter();

  const handleOnSubmit = async (formData: SignUpScheme) => {
    const { data } = await api.post('/users', {
      emailAddress: formData.emailAddress,
      password: formData.password,
    });
    if (data) {
      router.push('/');
    }
  };

  if (isSearchingUser) {
    return <SearchUser setIsSearchingUser={setIsSearchingUser} />;
  }
  return (
    <div className="max-w-md w-full space-y-4">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <button
          onClick={() => setIsSearchingUser(true)}
          className="mt-3 text-sm flex items-center space-x-2 text-green-900 hover:underline"
        >
          <SearchIcon className="h-5 w-5 " aria-hidden="true" />
          <p>Search for a user</p>
        </button>
      </div>
      <SignUpForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default SignUp;
