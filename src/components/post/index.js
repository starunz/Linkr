import { 
    Container, 
    ImageLikeContainer, 
    ImageUser, 
    TotalLikes,
    LikeTooltip,
    Main, 
    Title, 
    Text, 
    LinkContainer, 
    TitleLink, 
    MainLink, 
    TextLink, 
    ImageLink
} from "./style";

import { Load } from "../timeline/style";

import ReactHashtag from "@mdnm/react-hashtag";
import Hashtag from "../hashtag";

import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import ReactTooltip from 'react-tooltip';

import useAuth from "../../hooks/useAuth";
import * as api from '../../services/api';
import { useEffect, useState } from "react";

export default function Post({ post, postId }) {

    const { auth } = useAuth();
    const [postLikes, setPostLikes] = useState(); 
    const [likeLever, setLikeLever] = useState(false);
    
    useEffect(() => {
        const promise = api.getLikes(postId, auth.token);
        promise.then((response) => {
            setPostLikes(response.data)
        })
    }, [likeLever])
    
    function like() {
        const promise = api.likePost(postId, auth.id, auth.token);
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
                {postLikes[0].isLiked ? 
                    <LikeTooltip>
                        <a data-tip={`${postLikes[0].whoLiked}`}>
                                <FaHeart color="#AC0000" size={20} onClick={() => like()} /> 
                                <TotalLikes>{postLikes[0].count} likes</TotalLikes>
                        </a>
                    </LikeTooltip>
                    :
                    <LikeTooltip>
                        <a data-tip={`${postLikes[0].whoLiked}`}>
                                <FiHeart color="#fff" size={20} onClick={() => like()}/>
                                <TotalLikes>{postLikes[0].count} likes</TotalLikes>
                        </a> 
                    </LikeTooltip>}
                <ReactTooltip class="tooltip" place="bottom" type="light" effect="solid" multiline={true}/>
            </ImageLikeContainer>

            <Main>
                <Title>{post.author}</Title>
                <Text>
                <ReactHashtag
                    renderHashtag={(hashtagValue) => <Hashtag hashtagName={hashtagValue}/>}
                >
                    {post.description}
                </ReactHashtag>
                </Text>

                <LinkContainer href={post.link} target="_blank">
                    <MainLink>
                        <TitleLink>{post.linkTitle}</TitleLink>
                        <TextLink>
                              {post.linkDescription}
                            <br /> <br /> 
                            {post.link}
                        </TextLink>
                    </MainLink>
                    <ImageLink src={post.linkImage}/>
                </LinkContainer>
            </Main>
        </Container>
    );
}