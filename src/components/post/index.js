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
    ImageLink,
    Hashtag
} from "./style";
import { Link, useParams } from "react-router-dom";
import ReactHashtag from "@mdnm/react-hashtag";

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
                    renderHashtag={(hashtagValue) => <Link to={`/hashtag/${hashtagValue.substr(1)}`}><Hashtag>{hashtagValue}</Hashtag></Link>}
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