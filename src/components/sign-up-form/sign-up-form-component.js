import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
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
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName })
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName} />

        <label>Email</label>
        <input
          type={'email'}
          onChange={handleChange}
          name='email'
          value={email} />

        <label>Password</label>
        <input
          type='password'
          onChange={handleChange}
          name='password'
          value={password} />

        <label>Cofrim Password</label>
        <input
          type={'password'}
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm;