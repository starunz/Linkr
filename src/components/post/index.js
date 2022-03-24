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
import ReactHashtag from "@mdnm/react-hashtag";
import Hashtag from "../hashtag";

export default function Post({post}) {

    return(
        <Container>
            <ImageLikeContainer>
                <ImageUser src={post.photoUrl} alt={"user Photo"}/>
            </ImageLikeContainer>

            <Main>
                <Title>{post.author}</Title>
                <Text>
                <ReactHashtag
                    renderHashtag={(hashtagValue) => <Hashtag hashtagName={hashtagValue}/>}
                >
                    {post.description}
                </ReactHashtag>
                </Text>

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