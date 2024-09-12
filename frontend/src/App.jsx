import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/Navbar/Navbar";


const App = () => {
  return (
    <div>
      <>
        <NavBar />
        <Outlet />
      </>
    </div>
  );
};

export default App;
