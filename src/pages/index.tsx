import { Formik } from 'formik';
import SignInForm from '../components/Form/SignInForm';
import { api } from '../services/api';
import { SIGN_IN_INITIAL_VALUES } from '../utils/constants';
import {
  SignInScheme,
  signInValidationScheme,
} from '../utils/validations.scheme';

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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={SIGN_IN_INITIAL_VALUES}
          validationSchema={signInValidationScheme}
          onSubmit={handleOnSubmit}
        >
          {(formikProps) => <SignInForm {...formikProps} />}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
