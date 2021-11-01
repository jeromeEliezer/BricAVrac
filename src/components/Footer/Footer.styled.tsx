import styled from "styled-components";
//icons
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';




export const FooterStyled = styled.footer`
    width:100%;
    display:flex;
    position:absolute;
    bottom:5px;
    `;

export const RootList = styled.ul`
        list-style-type: none;
        display:flex;
        font-size:1.4rem;
    `;


export const ElementList = styled.li`
        display:flex;
        flex-direction:column-reverse;
        align-items: center;
        justify-content:center;
        margin:1rem;
    `;




export const Facebook = styled(FaFacebook)`
    width: 4rem;
    height: 4rem;
    color:white;
`;

export const Instagram = styled(FaInstagram)`
    width: 4rem;
    height: 4rem;
    color:white;
    
`;

export const Twitter = styled(SiTwitter)`
    width: 4rem;
    height: 4rem;
    color:white;  
`;

export const Lien = styled.p`
    color:white;
`;
