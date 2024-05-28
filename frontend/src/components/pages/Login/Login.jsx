// import { Form } from "react-router-dom";mkk
import NavBar from "../../layout/Navbar/Navbar";
import Form from "../../layout/Form/Form";
import { useState } from "react";
import { validateEmail } from "../../../utils/validateEmail";

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


    return (
        <div>
            <NavBar />
            <Form page={'login'} value={value} onChange={onChange} />

        </div>
    );
};

export default Login;
