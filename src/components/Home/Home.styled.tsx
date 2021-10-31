import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export const HomeStyle = styled.form`
    position : relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border: red 2px solid;
    height:100%;
    font-size: 2rem;
`;


export const Img = styled(motion.img)`
    object-fit: contain;
    flex-direction: column;
    justify-content: center;
    width:90%;
    height: 90%;
`;

export const LinkStyle = styled(Link)`
    text-decoration : none;
    cursor: pointer;
`;

export const Underlay = styled.div`
    position : absolute;
    background : white;
    top : 0;
    left : 0;
    height : 100%;
    width : 100%;
    z-index : -1;
    display : flex;
    flex-direction: column;
    & > *{
        flex : 1;
    }
`;

export const UnderlayCoverTop = styled.div`
    background : #EF7F04;
`
export const UnderlayCoverBottom = styled.div`
    display : flex;
    align-items : center;
    background : white;
    justify-content : flex-end;
`;

export const UnderlayCoverBottomChild = styled.div`
    background : white;
    height : 100%;
    width : 100%;
`;

export const Caption = styled.p`
    font-size : 4rem;
    font-weight: 800;
    text-align: left;
    color : white
`