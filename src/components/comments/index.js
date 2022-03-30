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


export default function Comments({commentState, commentsList, setCommentsList }) {
    
    const [text, setText] = useState("");
    const [following, setFollowing] = useState([]);

    
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
            </CommentsContainer>
        </>
    );
}