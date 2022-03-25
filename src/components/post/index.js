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
    NotImage,
} from "./style";
import { AiOutlineFileImage } from 'react-icons/ai';
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
    );
}