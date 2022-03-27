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
    EditingText,
} from "./style";
import { Load } from "../timeline/style";
import Hashtag from "../hashtag";
import ConfirmScreen from "../confirmScreen";

import { AiOutlineFileImage } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

import ReactHashtag from "@mdnm/react-hashtag";
import { ThreeDots } from 'react-loader-spinner';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';

import useAuth from "../../hooks/useAuth";
import * as api from '../../services/api';

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const [postLikes, setPostLikes] = useState(); 
    const [likeLever, setLikeLever] = useState(false);
    const [user, setUser] = useState({});
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const inputEditText = useRef(null);
    const [newDescription, setNewDescription] = useState(post.description);
    
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
        setIsLoading(true);
        if(!auth.token) return;
        const promise = api.deletePost(post.id, auth.token);

        promise.then(() => {
            window.location.reload();
        }).catch(() => {
            setShowConfirmScreen(false);
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "Delete post not sucess! Try again!",
            });
        });
    }

    async function editPost() {
        await setIsEditing(true);
        inputEditText.current?.focus();
    }

    function updatePosts(e) {
        e.preventDefault();
        setIsLoading(true);
        if(!auth.token) return;
        const promise = api.updatePost(post.id, auth.token, newDescription);

        promise.then(response => {
            window.location.reload();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "Update post not sucess! Try again!",
            });
            setIsLoading(false);
        });
    }

    document.onkeydown = function handleKeyDown(e){
        try {
            switch(e.key) {
                case 'Escape':
                    setIsEditing(false);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            {showConfirmScreen && (
                <ConfirmScreen 
                    post={post} 
                    deletePosts={deletePosts} 
                    setShow={setShowConfirmScreen}
                    isLoading={isLoading}
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
                <Title >
                    <span onClick={() => navigate(`/user/${post.userId}`)}>{post.author}</span>
                    {post.author === user.userName && (
                        <Icons>
                            <Icon>{isEditing? <BiEditAlt onClick={() => setIsEditing(false)} /> : <BiEditAlt onClick={editPost} />}</Icon>
                            <Icon><AiFillDelete onClick={() => setShowConfirmScreen(true)}/></Icon>
                        </Icons>
                    )}
                </Title>
                {isEditing? (
                    <form onSubmit={e => updatePosts(e)}>
                        <EditingText 
                            ref={inputEditText} 
                            type="text" 
                            value={newDescription}
                            onChange={e => setNewDescription(e.target.value)}
                            disabled={isLoading}
                        />
                    </form>
                ) : (
                    <Text>
                        <ReactHashtag
                            renderHashtag={(hashtagValue) => <Hashtag hashtagName={hashtagValue}/>}
                        >
                            {post.description}
                        </ReactHashtag>
                    </Text>
                )}

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