import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header"
import Title from "../../components/title"
import Trending from "../../components/trending"
import Post from "../../components/post";
import { ImageUser } from "../../components/post/style";
import { UserContainer } from "./styles";
import Search from "../../components/search";

import { 
    Container, 
    Main 
} from "../home/styles"

import { 
    Message, 
    Load 
} from "../../components/timeline/style";

import { 
    InputBox, 
    BoxIconInput 
} from "../home/styles";

import { 
    Container as ContainerPost 
} from "../../components/timeline/style";

import * as api from '../../services/api';

import Swal from 'sweetalert2';
import { ThreeDots } from 'react-loader-spinner';
import { AiOutlineSearch } from 'react-icons/ai';

export default function UserPage() {

    const [trendingList, setTrendingList] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { hashtag } = useParams();
    const { id } = useParams();

    useEffect(() => {
        
        setIsLoading(true);
        const promise = api.getUserPosts(id);

        promise.then(response => {
            let posts = response.data;
            if (hashtag)
                posts = posts.filter(p => { return p.description.indexOf(`#${hashtag}`) > 0 });
            setPosts(posts);
            setIsLoading(false);
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: 'An error occured while trying to fetch the posts, please refresh the page',
            });
            setIsLoading(false);
        });

        const promiseHashtag = api.getTrendingHashtags();

        promiseHashtag.then(response => {
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
            <Header/>
            <Container>
                <InputBox>
                    <Search />
                    <BoxIconInput><AiOutlineSearch /></BoxIconInput>
                </InputBox>

                {posts.length === 0 ? '' :
                    <UserContainer>
                        <ImageUser src={posts.user[0].photoUrl} /> 
                        <Title>{posts.user[0].userName}'s post</Title> 
                    </UserContainer>
                }
                
                <Main>
                    {posts.length === 0 ? '' :
                        <ContainerPost>
                            {(posts.posts.length === 0 && isLoading === false) ? <Message>There are no posts yet</Message> : ""}
                            {isLoading ? (
                                <Load><ThreeDots color="#FFFFFF" height={50} width={50} /></Load>
                            ) : (
                                posts.posts.map((post, i) => <Post key={i} post={post} />)
                            )}
                        </ContainerPost>
                    }
                    {trendingList.length > 0 &&
                        <Trending hashtagsList={trendingList} />
                    }
                </Main>
            </Container>
        </>
    )
}