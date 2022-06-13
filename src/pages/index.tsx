import { Formik } from 'formik';
import SignInForm from '../components/Form/SignInForm';
import { SIGN_IN_INITIAL_VALUES } from '../utils/constants';
import {
  SignInScheme,
  signInValidationScheme,
} from '../utils/validations.scheme';

const SignIn: React.FC = () => {
  const handleOnSubmit = (formData: SignInScheme) => {
    console.log(formData);
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
