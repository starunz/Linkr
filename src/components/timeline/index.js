import { useEffect, useState } from "react";
import Publish from "../publish";
import { Container, Load, Message } from "./style";
import * as api from '../../services/api';
import Post from "../post";
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Timeline() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { hashtag } = useParams();

    useEffect(() => {
        setIsLoading(true);
        let promise = null;
        if(hashtag)
        promise = api.getPosts(hashtag);
        else
        promise = api.getPosts();
        
        promise.then(response => {
            let posts = response.data;
            setPosts(posts);
            setIsLoading(false);
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: 'An error occured while trying to fetch the posts, please refresh the page',
              });
            setIsLoading(false);
        });
    }, [hashtag]);

    return(
        <Container>
            <Publish />
            {(posts.length === 0 && isLoading === false)? <Message>There are no posts yet</Message> : ""}
            {isLoading? (
                <Load><ThreeDots color="#FFFFFF" height={50} width={50} /></Load>
            ) : (
                posts.map((post, i) => <Post key={i} post={post} />)
            )}
        </Container>
    );
}