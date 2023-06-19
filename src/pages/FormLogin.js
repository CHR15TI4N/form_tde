import { useState } from 'react';
import Input from '../components/Input';
import './FormLogin.css';

const FormLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        const passwordValue = event.target.value
        setPassword(passwordValue)
        if (passwordValue.length >= 6) {
            setPasswordError()
        }
    }


    return (
        <div className='container'>
            <div className='formContainer'>
                <Input
                    label='E-mail'
                    name='emailInput'
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input
                    label={'Password'}
                    name='passwordInput'
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
        </div>
    );
}

export default FormLogin;