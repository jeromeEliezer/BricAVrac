import React, { useState } from "react";
import { useHistory } from "react-router";
import { LoginForm, Root, Button, BackgroundPetales } from "./Login.styled";
import petales from '../../assets/images/petales.png'


interface Props {
    setIsAuth: (isAuth: boolean) => void;
}

const Login: React.FC<Props> = ({ setIsAuth }) => {
    const history = useHistory()
    const handleLogin = () => {
        setIsAuth(true)
        history.push('/profile')
    }
    const [{ username, password }, setCredentials] = useState({
        username: '',
        password: ''
    })

    return (
        <Root>

            <BackgroundPetales>

                <LoginForm>

                    <label htmlFor='username'>Prénom</label>
                    <input placeholder='Prénom' value={username} onChange={(event) => setCredentials({
                        username: event.target.value,
                        password
                    })} />
                    <label htmlFor='password'>Mot de passe</label>
                    <input placeholder='Mot de passe' type='password' value={password} onChange={(event) => setCredentials({
                        password: event.target.value,
                        username
                    })} />
                    <Button variant={true} color='#4FA14A' type='submit' onClick={() => handleLogin()}>Se connecter</Button>
                </LoginForm>
            </BackgroundPetales>
        </Root>
    )
}

export default Login