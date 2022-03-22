import Header from "../../components/header";
import Timeline from "../../components/timeline";
import Title from "../../components/title";
import { Container, Main } from "./styles";

export default function Home() {
    return(
        <>
        <Header />
        <Container>
            <Main>
                <Title>timeline</Title>
                <Timeline />
            </Main>
        </Container>
        </>
    );
}