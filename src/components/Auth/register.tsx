import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm, Title, Root, Button, Input, Eyes, CloseEyes } from "./LoginRegister.styled";

function Register() {
    const [{ username, password }, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [showPassord, setShowPassword] = useState(false)

    const toggleShowPassword = ()=>{
        setShowPassword((clearShowPassord)=> !clearShowPassord)
    }
    return (
        <Root>
             <LoginForm>
                 <Title>S'inscrire</Title>
                        <label htmlFor='email' >Email</label>
                        <Input placeholder='Adresse mail' type='email'
                         />
                        <label htmlFor='username'>Prénom</label>
                        <Input placeholder='Prénom' value={username} onChange={(event) => setCredentials({
                            username: event.target.value,
                            password
                        })} />
                       
                        <label htmlFor='password'>Mot de passe</label>
                        <Input placeholder='Mot de passe' type={(showPassord) ? "text" : 'password'} value={password} onChange={(event) => setCredentials({
                            password: event.target.value,
                            username
                            
                        })} />
                         {showPassord ? <CloseEyes onClick={toggleShowPassword}/> : <Eyes  onClick={toggleShowPassword}/>}
                        <Button variant={true} color='#4FA14A' type='submit' >S'inscrire</Button>
                        <p>Vous avez déjà un compte ? <Link to='/login' > Cliquer ici </Link></p>
                    </LoginForm>
        </Root>
    )
}

export default Register