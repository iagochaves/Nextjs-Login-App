import SignInForm from '../components/Form/SignInForm';
import { api } from '../services/api';
import { SignInScheme } from '../utils/validations.scheme';

type UserData = SignInScheme[];

const SignIn: React.FC = () => {
  const handleOnSubmit = async (formData: SignInScheme) => {
    const { data: userData } = await api.get<UserData>('/users', {
      params: {
        emailAddress: formData.emailAddress,
        password: formData.password,
      },
    });
    if (!userData.length) {
      alert('User not found');
      return;
    }

    alert(`Hello, ${userData[0].emailAddress}`);
  };
  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <SignInForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default SignIn;
