import { LockClosedIcon } from '@heroicons/react/solid';
import { Form, Formik, FormikProps } from 'formik';
import Link from 'next/link';
import { SIGN_IN_INITIAL_VALUES } from '../../utils/constants';
import {
  SignInScheme,
  signInValidationScheme,
} from '../../utils/validations.scheme';
import Input from '../Input';

type SignInFormProps = {
  handleOnSubmit: (userData: SignInScheme) => void;
};
const SignInForm: React.FC<SignInFormProps> = ({ handleOnSubmit }) => {
  return (
    <Formik
      initialValues={SIGN_IN_INITIAL_VALUES}
      validationSchema={signInValidationScheme}
      onSubmit={handleOnSubmit}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <Input label="Email address" name="emailAddress" required />
          </div>
          <div>
            <Input label="Password" type="password" name="password" required />
          </div>

          <div>
            <button
              type="submit"
              className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Login
            </button>
          </div>
          <div className="text-sm">
            <span>Not registered yet?&nbsp;</span>
            <Link href="/signup">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                Create an Account
              </a>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
