import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import { LoginForm, Root, Button, BackgroundPetales,Eyes, CloseEyes  } from "./LoginRegister.styled";
import petales from '../../assets/images/petales.png';


interface Props {
    setIsAuth: (isAuth: boolean) => void;
}

const Login: React.FC<Props> = ({ setIsAuth }) => {

    const history = useHistory();

    const handleLogin = () => {
        setIsAuth(true)
        history.push('/profile')
    }

    const [{ username, password }, setCredentials] = useState({
        username: '',
        password: ''
    })
  
    //to show  and hide the password  
    const [showPassord, setShowPassword] = useState(false)
    const toggleShowPassword = ()=>{
        setShowPassword((clearShowPassord)=> !clearShowPassord)
    }
    
    
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
                {showPassord ? <CloseEyes onClick={toggleShowPassword}/> : <Eyes onClick={toggleShowPassword}> </Eyes>}

                        <Button variant={true} color='#4FA14A' type='submit' onClick={() => handleLogin()}>Se connecter</Button>
                        <p>Vous n'avez pas de compte ? <Link to='/register' > Cliquer ici </Link></p>
                    </LoginForm>
                   
            


            </BackgroundPetales>
        </Root>
    )
}

export default Login