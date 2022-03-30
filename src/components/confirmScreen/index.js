import { 
    ButtonAccept, 
    ButtonRecuse, 
    Buttons, 
    Container, 
    OpacityBackground, 
    Text 
} from "./style";

import { ThreeDots } from 'react-loader-spinner';

export default function ConfirmScreen({setShow, method, deletePost, repost, post, isLoading, message}) {

    return(
        <>
            <Container>
                {isLoading? <ThreeDots color="#FFFFFF" size="40" /> 
                : 
                method === "deletePosts" ? <Text> Are you sure you want <br /> to delete this post?</Text> : <Text>Do you want to re-post <br /> this link?</Text> }
                <Buttons>
                    <ButtonRecuse disabled={isLoading} onClick={() => setShow(false)}>{method === "deletePosts" ? 'No, go back' : 'No, cancel' }</ButtonRecuse>
                    <ButtonAccept disabled={isLoading} onClick={() => method === "deletePosts" ? deletePost(post.id) : repost(post.id)}>{method === "deletePosts" ? 'Yes, delete it' : 'Yes, share!' } </ButtonAccept>
                </Buttons>
            </Container>
            <OpacityBackground />
        </>
    );
}