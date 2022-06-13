import { Formik } from 'formik';
import { useRouter } from 'next/router';
import SignUpForm from '../../components/Form/SignUpForm';
import { api } from '../../services/api';
import { SIGN_UP_INITIAL_VALUES } from '../../utils/constants';
import {
  SignUpScheme,
  signUpValidationScheme,
} from '../../utils/validations.scheme';

const SignUp: React.FC = () => {
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
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <Formik
          initialValues={SIGN_UP_INITIAL_VALUES}
          validationSchema={signUpValidationScheme}
          onSubmit={handleOnSubmit}
        >
          {(formikProps) => <SignUpForm {...formikProps} />}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
