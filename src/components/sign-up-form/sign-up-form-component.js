import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";

import { H2, SignUpContainer } from './sign-up-form.styles.js';
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields()
    }
    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email alredy exist')
      }
      console.log(error)
    }
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  return (
    <SignUpContainer>
      <H2>Don't have an account ?</H2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName} />

        <FormInput
          label={'Email'}
          type={'email'}
          onChange={handleChange}
          name='email'
          value={email} />

        <FormInput
          label={'Password'}
          type='password'
          onChange={handleChange}
          name='password'
          value={password} />

        <FormInput
          label={'Cofrim Password'}
          type={'password'}
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword} />

        <Button type="submit" Submit >Sign up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm;