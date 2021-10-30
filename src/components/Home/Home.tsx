import { Caption, HomeStyle, Img, LinkStyle, Underlay, UnderlayCoverTop, UnderlayCoverBottom, UnderlayCoverBottomChild  } from "./Home.styled";
import logo from '../../assets/images/logo.jpeg'
import { Variants } from "framer-motion";
import { Button } from "../Auth/Login.styled";

const imageVariants : Variants = {
    open : {
        x : 0,
        opacity: 1,
        transition : {
            duration : .7,
            type : "spring"
        }
    },
    hidden : {
        x : -300,
        opacity : 0
    }
}

const HomePage: React.FC = () => {
    return (
        <HomeStyle>
            <Caption> 
                Pour que tout<br/> 
                le monde passe <br/>
                au Vrac...
            </Caption>
            <div>
                <Img 
                    variants = {imageVariants}
                    initial = "hidden"
                    animate = "open"
                    alt='logo' src={logo} 
                />
                <LinkStyle to="/login">
                    <Button
                        color='transparent'
                        variant={true}
                        animate={true}
                        textColor = "#EF7F04"
                    >
                        Connexion
                    </Button>
                </LinkStyle>
            </div>
            <Underlay>
                <UnderlayCoverTop />
                <UnderlayCoverBottom >
                    <UnderlayCoverBottomChild />
                </UnderlayCoverBottom>
            </Underlay>
        </HomeStyle>
    )
}

export default HomePage