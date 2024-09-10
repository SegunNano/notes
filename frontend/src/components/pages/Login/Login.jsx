// import { Form } from "react-router-dom";mkk
import NavBar from "../../layout/Navbar/Navbar";
import Form from "../../layout/Form/Form";
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onChange = [
        (e) => setEmail(e.target.value),
        (e) => setPassword(e.target.value),
        (e) => setName(e.target.value),
    ];
    const value = [email, password, name];


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post("/api/users/auth", {
                email: email,
                password: password
            });
            console.log(response);
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
                return <Navigate to='/dashboard' />;
            }
        } catch (error) {
            if (error.response.data.message) {
                SetError(error.response.data.nessage);
            } else {
                SetError('An unexpected error occured, Please try again.');
            }
        }
    };

    return (
        <div>
            <NavBar />
            <Form page={'login'} value={value} onChange={onChange} handleSubmit={handleSubmit} />

        </div>
    );
};

export default Login;
