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
    ImageLink, 
    NotImage,
    Icon,
    Icons,
} from "./style";
import { AiOutlineFileImage } from 'react-icons/ai';
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
import { BiEditAlt } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import ConfirmScreen from "../confirmScreen";

export default function Post({ post }) {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const [postLikes, setPostLikes] = useState(); 
    const [likeLever, setLikeLever] = useState(false);
    const [user, setUser] = useState({});
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);
    
    useEffect(() => {
        const promise = api.getLikes(post.id, auth.token);
        promise.then((response) => {
            setPostLikes(response.data)
        });
        const promiseTwo = api.getUserData(auth);
        promiseTwo.then(response => {
            setUser(response.data);
        });
    }, [likeLever]);

    function like() {
        const promise = api.likePost(post.id, auth.id, auth.token);
        promise.then(() => {
            setLikeLever(!likeLever)
        })
    }

    if(!postLikes) {
        return <Load><ThreeDots color="#FFFFFF" height={50} width={50} /></Load>
    }

    function deletePosts(id) {
        console.log(auth.token)
        if(!auth.token) return;
        const promise = api.deletePost(post.id, auth.token);
        promise.then(() => {
            window.location.reload();
        });
    }

    return(
        <Container>
            {showConfirmScreen && (
                <ConfirmScreen 
                    post={post} 
                    deletePosts={deletePosts} 
                    setShow={setShowConfirmScreen}
                />
            )}
            <ImageLikeContainer>
                <ImageUser src={post.photoUrl} alt={"user Photo"}/>
                <Icon>
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
                </Icon>
                <ReactTooltip class="tooltip" place="bottom" type="light" effect="solid" multiline={true}/>
            </ImageLikeContainer>

            <Main>
                <Title to={`/user/${auth.id}`}>
                    {post.author}
                    {post.author === user.userName && (
                        <Icons>
                            <Icon><BiEditAlt /></Icon>
                            <Icon><AiFillDelete onClick={() => setShowConfirmScreen(true)}/></Icon>
                        </Icons>
                    )}
                </Title>
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