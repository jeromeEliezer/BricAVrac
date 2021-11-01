import React from 'react';
import { Instagram, Facebook, Twitter, FooterStyled, RootList, ElementList, Lien } from './Footer.styled';

function Footer() {
    return (

        <FooterStyled>
            <RootList>
                <ElementList><Lien>Facebook</Lien><a href='https://www.facebook.com/BricAVrac'><Facebook /></a></ElementList>
                <ElementList><Lien>Instagram</Lien><a href='https://www.instagram.com/bric.a.vrac'><Instagram /></a></ElementList>
                <ElementList><Lien>Twitter</Lien><a href='https://twitter.com/bricavrac'><Twitter/></a></ElementList>
            </RootList>
        </FooterStyled >

    )
}
export default Footer
