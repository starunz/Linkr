import { 
    Container, 
    ImageLikeContainer, 
    ImageUser, 
    TotalLikes,
    Main, 
    Title, 
    Text, 
    LinkContainer, 
    TitleLink, 
    MainLink, 
    TextLink, 
    ImageLink, 
    NotImage,
    Icon,
} from "./style";
import { AiOutlineFileImage } from 'react-icons/ai';
import { Load } from "../timeline/style";
import ReactHashtag from "@mdnm/react-hashtag";
import Hashtag from "../hashtag";
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';

import useAuth from "../../hooks/useAuth";
import * as api from '../../services/api';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const [postLikes, setPostLikes] = useState(); 
    const [likeLever, setLikeLever] = useState(false);
    
    useEffect(() => {
        const promise = api.getLikes(post.id, auth.token);
        promise.then((response) => {
            setPostLikes(response.data)
        })
    }, [likeLever])
    
    function like() {
        const promise = api.likePost(post.id, auth.id, auth.token);
        promise.then(() => {
            setLikeLever(!likeLever)
        })
    }

    if(!postLikes) {
        return <Load><ThreeDots color="#FFFFFF" height={50} width={50} /></Load>
    }

    return(
        <Container>
            <ImageLikeContainer>
                <ImageUser src={post.photoUrl} alt={"user Photo"}/>
                <Icon>
                    {postLikes[0].isLiked ? <FaHeart color="#AC0000" size={20} onClick={() => like()}/> : <FiHeart color="#fff" size={20} onClick={() => like()}/>}
                </Icon>

                <TotalLikes>{postLikes[0].count} likes</TotalLikes>
            </ImageLikeContainer>

            <Main>
                <Title to={`/user/${auth.id}`}>{post.author}</Title>
                <Text>
                    <ReactHashtag
                        renderHashtag={(hashtagValue) => <Hashtag hashtagName={hashtagValue}/>}
                    >
                        {post.description}
                    </ReactHashtag>
                </Text>

                <LinkContainer href={post.link} target="_blank">

                    <MainLink>

                        <TitleLink>{post.titleLink}</TitleLink>
                        <TextLink>
                            {post.descriptionLinK}
                            <br /> <br /> 
                            {post.link}
                        </TextLink>

                    </MainLink>

                    {post.imageLink === ''? (
                        <NotImage><AiOutlineFileImage size="36px" /><span>no image</span></NotImage>
                    ) : (
                        <ImageLink src={post.imageLink}/>
                    )}
                </LinkContainer>
            </Main>
        </Container>
    );
}