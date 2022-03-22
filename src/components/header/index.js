import { Container, Logo, Input, ImageUser } from "./styles";

export default function Header() {
    return(
        <Container>
            <Logo>linkr</Logo>
            <Input placeholder="Search for people"/>
            <ImageUser />
        </Container>
    );
}