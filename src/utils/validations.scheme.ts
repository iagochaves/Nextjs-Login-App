import * as yup from 'yup';

export type SignInScheme = {
  emailAddress: string;
  password: string;
};

export type SignUpScheme = {
  emailAddress: string;
  password: string;
  passwordConfirmation: string;
};

export const signInValidationScheme = yup.object({
  emailAddress: yup
    .string()
    .email('Incorrect email address')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const signUpValidationScheme = yup.object({
  emailAddress: yup
    .string()
    .email('Incorrect email address')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});
