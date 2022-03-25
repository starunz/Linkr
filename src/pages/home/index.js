import { useEffect, useState } from "react";
import Header from "../../components/header";
import Timeline from "../../components/timeline";
import Title from "../../components/title";
import Trending from "../../components/trending";
import { Container, Main} from "./styles";
import { useParams } from "react-router-dom";
import * as api from '../../services/api';

export default function Home() {
    
    const { hashtag } = useParams();
    const [trendingList, setTrendingList] = useState([]);

    useEffect(() => {
        const promise = api.getTrendingHashtags();

        promise.then(response => {
            let hashtags = response.data;
            setTrendingList(hashtags);
        }).catch(error => {
            alert("An error occured while trying to fetch the trending hashtags, please refresh the page");
        });
    }, []);

    return(
        <>
        <Header />
        <Container>
            <Title>{hashtag ? '#'+hashtag : 'timeline'}</Title>
            <Main>
                <Timeline />
                {trendingList.length > 0 && 
                <Trending hashtagsList={trendingList}/>
                }
            </Main>
        </Container>
        </>
    );
}