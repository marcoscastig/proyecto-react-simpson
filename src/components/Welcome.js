import styled from "styled-components";
import Caratula from "../the-simpson.png";

export default function Welcome(props) {
    const{reqApi}= props
    return (
        <ContentCaratula>
     <WelcomeText>
      Bienvenido, dale click a la imagen para buscar las frases
     </WelcomeText>

     <ImageCaratula src={Caratula} onClick= {reqApi} alt = "Caratula"/>
     </ContentCaratula>
    );
  }

  const ImageCaratula = styled.img`
height: auto;
width: 450px;

&:hover{
  cursor: pointer;
}
`
const ContentCaratula = styled.div`
width: 100%;
text-align: center;
`;

const WelcomeText = styled.p`
color: #2a9d8f;
text-align: center;
font-weight: 900;
padding: 50px 0 10 px 0;
font-size: 25px;
`;



