import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
}
  from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { H2, SignUpContainer, ButtonContainer } from './sign-in-form.styles.js';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    }
    catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User not found')
          break;

        case 'auth/wrong-password':
          alert('Wrong password')
          break;

        default:
          console.log(error.code)
      }
    }
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  return (
    <SignUpContainer>
      <H2>Already have an account ?</H2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>

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

        <ButtonContainer>
          <Button type="submit" >Sign in</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign in </Button>
        </ButtonContainer>
      </form>
    </SignUpContainer>
  )
}

export default SignInForm;