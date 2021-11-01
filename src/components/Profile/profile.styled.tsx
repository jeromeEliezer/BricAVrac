import styled from "styled-components";
import imageBackground from '../../assets/images/back.jpg';

export const ProfileStyled = styled.div`
    background-image: url(${imageBackground});
    background-size: cover;
    height:100vh;
    width:100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding:10px;
    align-items:center;
    margin:0;

`;

export const Iframe = styled.iframe`
     border: 2px solid #4FA14A;
    @media (min-width: 768px) { 
        width:560px;
        height:315px;
      }
      @media (max-width: 320px) { 
        width:200px;
        height:215px;
      }
`;

