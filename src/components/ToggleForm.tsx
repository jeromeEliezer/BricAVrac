import {useState, useMemo} from 'react';
/// type of component's Title 
import { ToggleFormType } from '../types';
// Link from react-router-dom with styled
import {  LinkAuth } from "./Auth/LoginRegister.styled";
/// switch beetween login and register form;
function ToggleForm(props: ToggleFormType) {
    const [ path, setPath ] = useState<string>('register');
    const handlePath = useMemo(() => {
        if(props.formTitle === 'Se connecter' ){
            setPath('register')
            return `Vous n'avez pas compte ?`
        }
        setPath('login')
        return 'Vous avez un compte ?'
    },[props.formTitle]);
    return (
        <p>
            {handlePath}
            <LinkAuth to = {`/${path}`} >Cliquez ici</LinkAuth>
        </p>
    )
}

export default ToggleForm;
 