import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import SignIn from "./routes/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
