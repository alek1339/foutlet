import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
}
  from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";

import './sign-in-form.styles.scss';

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
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
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

        <div className="buttons-container">
          <Button type="submit" >Sign in</Button>
          <Button type='button' buttonType={'google'} onClick={signInWithGoogle} >Google Sign in </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;