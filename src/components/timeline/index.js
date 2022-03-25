import { useEffect, useState } from "react";
import Publish from "../publish";
import { Container, Load, Message } from "./style";
import * as api from '../../services/api';
import Post from "../post";
import { ThreeDots } from 'react-loader-spinner';
import useAuth from "../../hooks/useAuth";

export default function Timeline() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { auth } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        const promise = api.getPosts();

        promise.then(response => {
            setPosts(response.data);
            setIsLoading(false);
        }).catch(error => {
            alert("An error occured while trying to fetch the posts, please refresh the page");
            setIsLoading(false);
        });
    }, []);

    return(
        <Container>
            <Publish />
            {(posts.length === 0 && isLoading === false)? <Message>There are no posts yet</Message> : ""}
            {isLoading? (
                <Load><ThreeDots color="#FFFFFF" height={50} width={50} /></Load>
            ) : (
                posts.map((post, i) => <Post key={i} post={post} likes={post.totalLikes} postId={post.postId}/>)
            )}
        </Container>
    );
}