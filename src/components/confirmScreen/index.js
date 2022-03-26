import { ButtonAccept, ButtonRecuse, Buttons, Container, OpacityBackground, Text } from "./style";

export default function ConfirmScreen({setShow, deletePosts, post}) {

    return(
        <>
            <Container>
                <Text>Are you sure you want <br /> to delete this post?</Text>
                <Buttons>
                    <ButtonRecuse onClick={() => setShow(false)}>No, go back</ButtonRecuse>
                    <ButtonAccept onClick={() => deletePosts(post.id)}>Yes, delete it</ButtonAccept>
                </Buttons>
            </Container>
            <OpacityBackground />
        </>
    );
}