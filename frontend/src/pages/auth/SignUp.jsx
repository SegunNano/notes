import Form from "../../components/layout/Form/Form";
import { useState, useEffect } from "react";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLocation } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector(state => state.auth);

    useEffect(() => {
        if (userInfo) navigate(redirect);
    }, [navigate, redirect, userInfo]);





    const onChange = [
        (e) => setEmail(e.target.value),
        (e) => setPassword(e.target.value),
        (e) => setName(e.target.value),
    ];
    const value = [email, password, name];
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await register({ username: name, password, email }).unwrap();
            // console.log(res);
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
            console.log('success');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form value={value} onChange={onChange} handleSubmit={handleSubmit} />
    );
};

export default SignUp;
