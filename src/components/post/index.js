import { 
    Container, 
    ImageLikeContainer, 
    ImageUser, 
    Total,
    LikeTooltip,
    RepostContainer,
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
    BackgroundContainer,
    RepostHeader
} from "./style";
import { Load } from "../timeline/style";
import Hashtag from "../hashtag";
import ConfirmScreen from "../confirmScreen";

import { AiOutlineFileImage } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';

import ReactHashtag from "@mdnm/react-hashtag";
import { ThreeDots } from 'react-loader-spinner';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2';

import useAuth from "../../hooks/useAuth";
import * as api from '../../services/api';

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ post, setHashtagsLists }) {

    const { auth } = useAuth();
    const navigate = useNavigate();
    const [postLikes, setPostLikes] = useState(); 
    const [totalReposts, setTotalReposts] = useState();
    const [likeLever, setLikeLever] = useState(false);
    const [user, setUser] = useState({});
    const [showConfirmScreen, setShowConfirmScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const inputEditText = useRef(null);
    const [newDescription, setNewDescription] = useState(post.description);
    const [method, setMethod] = useState();
    
    useEffect(() => {
        const promiseLikes = api.getLikes(post.id, auth.token);
        promiseLikes.then((response) => {
            setPostLikes(response.data)
        });

        const promiseUser = api.getUserData(auth);
        promiseUser.then(response => {
            setUser(response.data);
        });

        const promiseRepost = api.getReposts(post.id, auth.token);
        promiseRepost.then(response => {
            setTotalReposts(response.data);
        });
    }, [likeLever, auth, post.id]);

    function like() {
        const promise = api.likePost(post.id, auth.id, auth.token);
        promise.then(() => {
            setLikeLever(!likeLever)
        })
    }

    if(!postLikes) {
        return <Load><ThreeDots color="#FFFFFF" height={50} width={50} /></Load>
    }

    function changeMessageScreenToDelete(){
        setShowConfirmScreen(true);
        setMethod("deletePosts");
    }
    
    function changeMessageScreenToRepost(){
        setShowConfirmScreen(true);
        setMethod("repost");
    }

    function repost(postId) {
        setIsLoading(true);
        if(!auth.token) return;

        const body = { 
            userId: auth.id,
            userPosted: post.userId,
            postId: postId
        }
        
        const promise = api.repost(body, auth.token);

        promise.then(() => {
            window.location.reload();
        }).catch(() => {
            setIsLoading(false);
            setShowConfirmScreen(false);
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "Something went wrong! Try again!",
            });
        });
    }

    function deletePosts(id) {
        setIsLoading(true);
        if(!auth.token) return;
        const promise = api.deletePost(post.id, auth.token);

        promise.then(() => {
            window.location.reload();
        }).catch(() => {
            setIsLoading(false);
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

    function updatePosts() {
        setIsLoading(true);
        if(!auth.token) return;
        const promise = api.updatePost(post.id, auth.token, newDescription);

        promise.then(response => {
            setIsEditing(false);
            setIsLoading(false);
            const promise = api.getTrendingHashtags();

            promise.then(response => {
                setHashtagsLists(response.data);
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: "OOPS...",
                    text: "An error occured while trying to fetch the trending hashtags, please refresh the page",
                });
            });
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "Update post not sucess! Try again!",
            });
            setIsLoading(false);
        });
    }

    function onBeforeUpdatePosts(e)
    {
        e.preventDefault();
        updatePosts();
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
        <BackgroundContainer > 
            {post.userRepostName ? 
                <RepostHeader>
                    <BiRepost color="#fff" size={25} ></BiRepost>
                    <span>Re-posted by <strong>{post.userRepostId === auth.id ? 'You' : post.userRepostName}</strong> </span>
                </RepostHeader> 
                :
                ''
            }    
            <Container>
                {showConfirmScreen && (
                    <ConfirmScreen 
                        post={post} 
                        method={method} 
                        deletePost={deletePosts}
                        repost={repost}
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
                                    <Total>{postLikes[0].count} likes</Total>
                            </a>
                        </LikeTooltip>
                        :
                        <LikeTooltip>
                            <a data-tip={`${postLikes[0].whoLiked}`}>
                                    <FiHeart color="#fff" size={20} onClick={() => like()}/>
                                    <Total>{postLikes[0].count} likes</Total>
                            </a> 
                        </LikeTooltip>}
                    </Icon>
                    <ReactTooltip class="tooltip" place="bottom" type="light" effect="solid" multiline={true}/>

                    <RepostContainer>
                        <BiRepost color="#fff" size={25} onClick={() => changeMessageScreenToRepost()} ></BiRepost>
                        {totalReposts ? 
                            <Total> {totalReposts[0].count} {totalReposts[0].count > 1 ? 're-posts' : 're-post' }</Total>
                            : 
                            ''
                        }
                    </RepostContainer>    
                
                </ImageLikeContainer>

                <Main>
                    <Title >
                        <span onClick={() => navigate(`/user/${post.userId}`)}>{post.author}</span>
                        { !post.userRepostName ? 
                            post.author === user.userName && (
                                <Icons>
                                    <Icon>{isEditing? <BiEditAlt onClick={() => setIsEditing(false)} /> : <BiEditAlt onClick={editPost} />}</Icon>
                                    <Icon><AiFillDelete onClick={() => changeMessageScreenToDelete()}/></Icon>
                                </Icons>
                        ) : ''}
                    </Title>

                    {isEditing? (
                        <EditingText 
                            ref={inputEditText} 
                            type="text" 
                            value={newDescription}
                            onChange={e => setNewDescription(e.target.value)}
                            disabled={isLoading}
                            onKeyPress={(e) => { e.key === 'Enter' && onBeforeUpdatePosts(e); }}
                        />
                    ) : (
                        <Text>
                            <ReactHashtag
                                renderHashtag={(hashtagValue) => <Hashtag hashtagName={hashtagValue}/>}
                            >
                                {newDescription}
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
        </BackgroundContainer>
    );
}