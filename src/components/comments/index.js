import React, { useContext, useEffect, useState } from "react";

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

export default function Comments({commentState, commentsList, setCommentsList, postId, isRepost }) {
    
    const [text, setText] = useState("");
    const [following, setFollowing] = useState([]);
    const [comments, setComments] = useState();

    useEffect(() => {
        const promiseComents = api.getComments(postId);

        promiseComents.then((response) => {
            setComments(response.data);
        })

    }, [])
    
    return (
        <>
            <CommentsContainer commentState={commentState}>
                <BoxScroller>
                    <Comment >
                        <Link to={`/user`}>
                            <img src="" alt="foto do usuário"/>
                        </Link>
                        <div>
                            <h4>
                                <span>
                                
                                    • post’s author
                                        
                                    • following" 
                                        
                                </span>
                            </h4>
                            <p>ueeeee</p>
                        </div>
                    </Comment>    

                    <Comment >
                        <Link to={`/user`}>
                            <img src="../../assets/images/narutin.jpg" alt="foto do usuário"/>
                        </Link>
                        <div>
                            <h4>
                                <span>
                                
                                    • post’s author"
                                        
                                    • following" 
                                        
                                </span>
                            </h4>
                            <p>ueeeee</p>
                        </div>
                    </Comment>    

                    <Comment >
                        <Link to={`/user`}>
                            <img src="../../assets/images/narutin.jpg" alt="foto do usuário"/>
                        </Link>
                        <div>
                            <h4>
                                <span>
                                
                                    • post’s author"
                                        
                                    • following" 
                                        
                                </span>
                            </h4>
                            <p>ueeeee</p>
                        </div>
                    </Comment>    

                    <Comment >
                        <Link to={`/user`}>
                            <img src="" alt="foto do usuário"/>
                        </Link>
                        <div>
                            <h4>
                                <span>
                                
                                    • post’s author"
                                        
                                    • following" 
                                        
                                </span>
                            </h4>
                            <p>ueeeee</p>
                        </div>
                    </Comment>    
                </BoxScroller>  
                { !isRepost ? 
                    <WriteComment >
                        <img src='' alt="foto" />
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