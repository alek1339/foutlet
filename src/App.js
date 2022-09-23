import Home from "./routes/home/home.component.js";
import { Routes, Route, } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components.js";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return (
    <div>
      Shop page
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
