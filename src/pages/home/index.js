import Header from "../../components/header";
import Timeline from "../../components/timeline";
import Title from "../../components/title";
import { Container, Main } from "./styles";
import { useParams } from "react-router-dom";
export default function Home() {
    const { hashtag } = useParams();
    return(
        <>
        <Header />
        <Container>
            <Main>
                <Title>{hashtag ? '#'+hashtag : 'timeline'}</Title>
                <Timeline />
            </Main>
        </Container>
        </>
    );
}