import Dashboard from "../components/pages/Home/Dashboard";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Home = () => {
    const { userInfo } = useSelector(state => state.auth);
    // const navigate = useNavigate();
    return (
        <>
            {userInfo ? (
                <Dashboard />
            ) : (
                <Navigate to='/login' replace />
            )}
        </>
    );
};

export default Home;
