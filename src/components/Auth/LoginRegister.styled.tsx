import styled from "styled-components";
import petales from '../../assets/images/petales.png';
import { AiOutlineEye } from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

export const Title = styled.h3`
text-align : center;
`;


export const Root = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-image : url(${petales});
    // background-repeat : no-repeat;
    // background-position : contain;
  
    // border : 2px #EF7F04 solid;
    ` ;


export const LoginForm = styled.form`
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
    max-width: 250px;
    margin: 0 auto;
    gap: 20px;
    border : 3px #4FA14A solid;
    background-color: white;
    padding 40px;
    // background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

export const Input = styled.input`
border : 1px solid #4FA14A;
    &focus{
        border : 1px solid #EF7F04;
    }
`;

type ButtonProps = {
    animate?: boolean,
    color: string,
    variant?: boolean,
    textColor?: string
}

export const Button = styled.button`
    width: 120px;
    font-size: 1.5rem;
    padding: 10px;
    border: 1px solid #EF7F04;
    align-self: center;
    position : relative;
    ${(props: ButtonProps) => props && ` 
        color: ${props.textColor ? props.textColor : "#ffffff"} ;
        background: ${props.color};
        border-radius:${props.variant ? '8px' : '0px'};
        ${props.animate && `
            &:hover{
                background : #EF7F04;
                color: white;
            }
        `}
    ` }
    transition: all 300ms ease 0ms;
`;

type EyesProps = {
    transform?: boolean,
}

export const Eyes = styled(AiOutlineEye)`
    position: absolute;
    transform: translateX(14rem) translateY(5.65rem);
`;

export const CloseEyes = styled(AiOutlineEyeInvisible)`
    position: absolute;
    transform: translateX(14rem) translateY(5.65rem);
`;