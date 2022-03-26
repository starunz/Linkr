import { ButtonAccept, ButtonRecuse, Buttons, Container, OpacityBackground, Text } from "./style";
import { ThreeDots } from 'react-loader-spinner';


        
export default function ConfirmScreen({setShow, deletePosts, post, isLoading}) {


    return(
        <>
            <Container>
                {isLoading? <ThreeDots color="#FFFFFF" size="40" /> : <Text>Are you sure you want <br /> to delete this post?</Text>}
                <Buttons>
                    <ButtonRecuse disabled={isLoading} onClick={() => setShow(false)}>No, go back</ButtonRecuse>
                    <ButtonAccept disabled={isLoading} onClick={() => deletePosts(post.id)}>Yes, delete it</ButtonAccept>
                </Buttons>
            </Container>
            <OpacityBackground />
        </>
    );
}