import { StyledForm, Title, Button, Password, Input } from "./LoginRegister.styled";
import { PasswordIconButton } from '../PasswordIconButton'
import { CredentialsType } from "../../types";
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router'
import ToggleForm from '../ToggleForm';

type FormProps = {
    title: string;
    children: React.ReactNode;
    //for setting password up    
    setCredentials: (credentials: CredentialsType) => void;
    credentials: CredentialsType
};

export const Form = (props: FormProps) => {
    const ref = useRef<HTMLInputElement>(null);
    //toogle password visibility
    const [showPassword, setShowPassword] = useState<boolean>(true);
    //string relaceing password when !showPassword
    const [hiddenPassword, setHiddenPassword] = useState<string>('');
    // history
    const history = useHistory();
    //return • when !showPassword or password
    useEffect(() => {
        if (ref.current) {
            if (showPassword) {
                console.log('porps28', props.credentials.password);
                ref.current.value = props.credentials.password
            } else {
                ref.current.value = ref.current.value.split('').map(c => '•').join('')
            }
        }
    }, [showPassword])
    // keep value password
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        props.setCredentials({ ...props.credentials, password: target.value });
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        if (props.title === 'Se connecter') {
            history.push('./Profile')
            return
        }
        history.push('./login');
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Title>{props.title}</Title>
            {props.children}
            <Password>
                <label htmlFor='password'>Mot de passe</label>
                <Input
                    placeholder='Mot de passe'
                    onChange={handleChangePassword}
                    ref={ref}
                />
                <PasswordIconButton visible={showPassword} setVisible={setShowPassword} />
            </Password>
            <ToggleForm formTitle={props.title} />
            <Button variant={true} color='#4FA14A' type='submit'>{props.title} </Button>
        </StyledForm>
    )
}