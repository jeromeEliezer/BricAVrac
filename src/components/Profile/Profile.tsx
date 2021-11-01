import React from 'react';
import Footer from '../Footer/Footer';
import { ProfileStyled, Iframe} from './profile.styled'

function Profile() {
    return (
        <ProfileStyled>
            <Iframe src="https://www.youtube.com/embed/Dvj9iQ9VbKM"
                title="Bric à Vrac au Change Now"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </Iframe>
            <Footer />
            
        </ProfileStyled >
    )
}

export default Profile

