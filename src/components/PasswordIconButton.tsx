import { AiOutlineEye } from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import { PasswordIcon } from "./Auth/LoginRegister.styled";

type PassIcon= {
    visible : boolean;
    setVisible : (visible : boolean) => void
}

export const PasswordIconButton = (props : PassIcon) => {
    //toggle password visibility
    const handleSetVisible = () => props.setVisible(!props.visible);
    return(
        <PasswordIcon onClick = {handleSetVisible}>
            {props.visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
        }
        </PasswordIcon>
    )
}   