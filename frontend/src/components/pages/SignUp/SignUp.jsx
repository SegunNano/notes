import NavBar from "../../layout/Navbar/Navbar";
import Form from "../../layout/Form/Form";
import { useState } from "react";


const SignUp = () => {
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
            <Form page={'signup'} value={value} onChange={onChange} />
        </div>
    );
};

export default SignUp;
