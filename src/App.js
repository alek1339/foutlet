
import { Routes, Route, } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action'

import Home from "./routes/home/home.component.js";
import Navigation from "./routes/navigation/navigation.components.js";
import Authentication from "./routes/authentication/authentication.component";
import Shop from './routes/shop/shop.component';
import Checkout from "./routes/checkout/checkout.component.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const usubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user)
      dispatch({ type: 'SET_CURRENT_USER', payload: user });
    });

    return usubscribe;
  }, [dispatch])


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
