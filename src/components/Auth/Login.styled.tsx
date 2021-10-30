import styled from "styled-components";
import petales from '../../assets/images/petales.png';



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

export const BackgroundPetales = styled.div`
    width:100%;
    height: 50vh;
    border: 1px solid #EF7F04;

    // background-image : url(${petales});
    // background-repeat : no-repeat;
    // background-position : center;
`;


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