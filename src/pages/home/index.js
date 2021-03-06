import { useEffect, useState } from "react";
import Header from "../../components/header";
import Timeline from "../../components/timeline";
import Title from "../../components/title";
import Trending from "../../components/trending";
import { Container, Main, InputBox, BoxIconInput} from "./styles";
import { useParams } from "react-router-dom";
import * as api from '../../services/api';
import Swal from 'sweetalert2';
import { AiOutlineSearch } from 'react-icons/ai';
import Search from "../../components/search";


export default function Home() {
    
    const { hashtag } = useParams();
    const [trendingList, setTrendingList] = useState([]);

    useEffect(() => {
        const promise = api.getTrendingHashtags();

        promise.then(response => {
            let hashtags = response.data;
            setTrendingList(hashtags);
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "An error occured while trying to fetch the trending hashtags, please refresh the page",
            });
        });

    }, []);


    return(
        <>
        <Header />
        <Container>
            <InputBox>
                <Search />
                <BoxIconInput><AiOutlineSearch /></BoxIconInput>
            </InputBox>
            <Title>{hashtag ? '# '+hashtag : 'timeline'}</Title>
            <Main>
                <Timeline setHashtagsLists={setTrendingList}/>
                {trendingList.length > 0 && 
                <Trending hashtagsList={trendingList}/>
                }
            </Main>
        </Container>
        </>
    );
}