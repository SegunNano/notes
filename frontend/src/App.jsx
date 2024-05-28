import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/pages/Home/Home";
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';


const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);


const App = () => {
  return (
    <>
      <div>{routes}</div>
    </>
  );
};

export default App;
