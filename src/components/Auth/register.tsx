import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Image, LinkAuth, LoginForm, Title, Root, Button, Input, Eyes, CloseEyes } from "./LoginRegister.styled";
import petales from '../../assets/images/petales.png';
 

interface Props {
    setIsAuth: (isAuth: boolean) => void;
}


const Register :React.FC<Props> = ({ setIsAuth }) => {
    const [{ username, password, email }, setCredentials] = useState({
        email: '',
        username: '',
        password: '',
        
    });

    const history = useHistory();
    
    const handleLogin = () => {
        setIsAuth(true)
        history.push('/profile')
    };

    const [showPassord, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword((clearShowPassord) => !clearShowPassord)
    }
    return (
        <Root>
            <Image src={petales} />
            <LoginForm>
                <Title>S'inscrire</Title>
                <label htmlFor='email' >Email</label>
                <Input placeholder='Adresse mail' type='email' value={email} onChange={(event) => setCredentials({
                    email: event.target.value,
                    password,
                    username
                })}
                />
                <label htmlFor='username'>Prénom</label>
                <Input placeholder='Prénom' value={username} onChange={(event) => setCredentials({
                    username: event.target.value,
                    password,
                    email
                })} />

                <label htmlFor='password'>Mot de passe</label>
                <Input placeholder='Mot de passe' type={(showPassord) ? "text" : 'password'} value={password} onChange={(event) => setCredentials({
                    password: event.target.value,
                    username,
                    email
                })} />
                {showPassord ? <CloseEyes onClick={toggleShowPassword} /> : <Eyes onClick={toggleShowPassword} />}
                <Button variant={true} color='#4FA14A' type='submit'onClick={() => handleLogin()} >S'inscrire</Button>
                <p>Vous avez déjà un compte ? <LinkAuth to='/login' > Cliquez ici </LinkAuth></p>
            </LoginForm>
        </Root>
    )
}

export default Register