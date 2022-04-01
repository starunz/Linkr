import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import { Link } from "react-router-dom";

import { 
    CommentsContainer,
    BoxScroller,
    Comment,
    WriteComment,
    ButtonSendComment,
    IconSendComment
} from "./style";

import * as api from '../../services/api';

import Swal from "sweetalert2";

export default function Comments({commentState, postId, isRepost, whoPosted, setTotalComments}) {
    
    const { auth } = useAuth();
    const [text, setText] = useState("");
    const [following, setFollowing] = useState([]);
    const [comments, setComments] = useState();
    const [userData, setUserData] = useState();
    const [lever, setLever] = useState(false);

    useEffect(() => {
        const promiseComents = api.getComments(postId);

        promiseComents.then((response) => {
            setComments(response.data)
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "An error occured while trying to fetch comment, please refresh the page",
            });
        });

        const promise = api.getUserData(auth);
        promise.then(response => {
            setUserData(response.data);
        });

        const promiseFollows = api.getFollowingsUser(auth.id);
    
        promiseFollows.then(response => {
            setFollowing(response.data);
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "An error occured while trying to fetch followers, please refresh the page",
            });
        });
        
    }, [lever])

    function createComment(e){
        e.preventDefault();
        const body = { text: text }

        const promise = api.createComment(postId, body,auth.token);

        promise.then(() => {
            const promiseComents = api.getComments(postId);
            promiseComents.then((response) => {
                setTotalComments(response.data.length);
            })
            setLever(!lever);
            setText('');
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "An error occured while trying to create comment, please refresh the page",
            });
        });
    }
    
    return (
        <>
            <CommentsContainer commentState={commentState}>
                <BoxScroller>
                    { !comments ?  '' :
                       (comments.map(comment => 
                            <Comment key={comment.id}>
                                <Link to={`/user/${comment.userId}`}>
                                    <img src={comment.photoUrl} alt="foto do usuário"/>
                                </Link>
                                <div>
                                    <h4>
                                       <Link to={`/user/${comment.userId}`}>
                                            <span>
                                                {comment.author}
                                            </span>
                                       </Link>
                                       <p> {whoPosted === comment.userId ? `• post's author` : '' }</p>
                                       <p> {following.includes(comment.userId) ? `• following` : '' }</p> 
                                    </h4>
                                    <p>{comment.text}</p>
                                </div>
                            </Comment>  
                        ))
                    }
                   
                </BoxScroller>  
                { !isRepost ? 
                    <WriteComment onSubmit={createComment}>
                        <img src={userData ? userData.photoUrl : ''} alt="foto" />
                        <input 
                            type="text" 
                            placeholder="write a comment..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                            />
                        <ButtonSendComment type="submit">
                            <IconSendComment/>
                        </ButtonSendComment>
                    </WriteComment>
                    : '' 
                }  
            </CommentsContainer>
        </>
    );
}