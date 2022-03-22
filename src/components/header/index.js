import { Container, Logo, Input, ImageUser } from "./styles";
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
    return(
        <Container>
            <Logo>linkr</Logo>
            <Input placeholder="Search for people"/>
            <div>
                <ImageUser>
                
                </ImageUser>
            </div>
        </Container>
    );
}