import { LockClosedIcon } from '@heroicons/react/solid';
import { Form, FormikProps } from 'formik';
import Link from 'next/link';
import { SignUpScheme } from '../../utils/validations.scheme';
import Input from '../Input';

const SignUpForm: React.FC<FormikProps<SignUpScheme>> = () => {
  return (
    <Form className="mt-8 space-y-4">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6">
          <Input label="Email address" name="emailAddress" required />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Input label="Passoword" type="password" name="password" required />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <Input
            label="Confirm Password"
            type="password"
            name="passwordConfirmation"
            required
          />
        </div>
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
          Sign Up
        </button>
      </div>
      <div className="text-sm">
        <span>Already have an account?&nbsp;</span>
        <Link href="/">
          <a className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default SignUpForm;