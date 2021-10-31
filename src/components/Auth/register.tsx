import { useState } from "react";
import { Image, Root, Input } from "./LoginRegister.styled";
import petales from '../../assets/images/petales.png';
import { Form } from "./Form";
import { CredentialsType } from "../../types";

const Register: React.FC = () => {
    const [registerCredentials, setCrendentials] = useState<CredentialsType>({
        password: '',
        email: '',
        username: ''
    });
    //keep value inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const name = target.name;
        setCrendentials({ ...registerCredentials, [name]: target.value })
    }
    return (
        <Root>
            <Image src={petales} />
            <Form title="S'inscrire" setCredentials={setCrendentials} credentials={registerCredentials} >
                <label htmlFor='email' >Email</label>
                <Input name='email' onChange={handleChange} placeholder='Adresse mail' type='email'
                />
                <label htmlFor='username'>Prénom</label>
                <Input name='username' onChange={handleChange} placeholder='Prénom' />

            </Form>
        </Root>
    )
}

export default Register