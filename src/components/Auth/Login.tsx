import React, { useState } from "react";
import { Image, Input, Root, } from "./LoginRegister.styled";
import petales from '../../assets/images/petales.png';
import { Form } from "./Form";
import { CredentialsType } from "../../types";

interface Props {
    setIsAuth: (isAuth: boolean) => void;
}

const Login: React.FC<Props> = () => {
    //setState value of input 
    const [registerCredentials, setCrendentials] = useState<CredentialsType>({
        password: '',
        email: '',
        username: ''
    });
    return (
        <Root>
            <Image src={petales} />
            <Form title='Se connecter' setCredentials={setCrendentials} credentials={registerCredentials} >
                <label htmlFor='username'>Prénom</label>
                <Input placeholder='Prénom' />
            </Form>
        </Root>
    )
}

export default Login