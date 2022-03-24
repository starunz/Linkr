import { 
    Container, 
    ImageLikeContainer, 
    ImageUser, 
    Main, 
    Title, 
    Text, 
    LinkContainer, 
    TitleLink, 
    MainLink, 
    TextLink, 
    ImageLink 
} from "./style";

export default function Post({post}) {

    return(
        <Container>
            <ImageLikeContainer>
                <ImageUser src={post.photoUrl} alt={"user Photo"}/>
            </ImageLikeContainer>

            <Main>
                <Title>{post.author}</Title>
                <Text>{post.description}</Text>

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