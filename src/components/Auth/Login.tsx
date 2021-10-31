import React, { useState } from "react";
import { Image, Input, Root, } from "./LoginRegister.styled";
import petales from '../../assets/images/petales.png';
import { Form } from "./Form";
import { CredentialsType } from "../../types";

interface Props {
    setIsAuth: (isAuth: boolean) => void;
}

const Login: React.FC<Props> = () => {
    const [registerCredentials, setCrendentials] = useState<CredentialsType>({
        password: '',
        email: '',
        username: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const name = target.name;
        setCrendentials({ ...registerCredentials, [name]: target.value })
    };
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