import { useEffect, useState, useRef } from "react";
import Publish from "../publish";
import { Container, Load, Message } from "./style";
import * as api from '../../services/api';
import Post from "../post";
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import useAuth from "../../hooks/useAuth";

export default function Timeline({ setHashtagsLists }) {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { hashtag } = useParams();
    const { auth } = useAuth();
    const [followingsUserLoged, setFollowingsUserLoged] = useState([]);
    const [scrollRadio, setScrollRadio] = useState (null);
    const scrollObserve = useRef();
    let hasMorePosts = true;

    useEffect(() => {
        if(auth.token) {
            setIsLoading(true);
            let promise = null;
            if(hashtag)
            promise = api.getPosts(hashtag, auth.token);
            else
            promise = api.getPosts("", auth.token);
            
            promise.then(response => {
                let posts = response.data.limitPosts;
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
        }

        const promiseFollows = api.getFollowingsUser(auth.id);

        promiseFollows.then(response => {
            setFollowingsUserLoged(response.data);
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: "OOPS...",
                text: "An error occured while trying to fetch the trending hashtags, please refresh the page",
            });
        });
        
    }, [hashtag, auth]);
    
    const intersectionObserve = new IntersectionObserver( (entries) => {
        const radio = entries[0].intersectionRatio;
        setScrollRadio(radio);
    } );

    useEffect( () => {
        intersectionObserve.observe(scrollObserve.current);

        return () => {
            intersectionObserve.disconnect();
        }
    }, []);

    const lastIndex = () => {
        const lastItem = posts.length;
        return lastItem;
    };
        
    useEffect(() => {
        if (scrollRadio > 0 && hasMorePosts) {
        api.getPosts(hashtag? hashtag : '', auth.token, lastIndex() )
        .then((res) => {
            const newPosts = [...posts, ...res.data.limitPosts];
            setPosts(newPosts);
            setIsLoading(false);
            hasMorePosts = res.data.hasMore;
        });
    }  

    },[scrollRadio]);


    return(
        <Container>
            <Publish />
            {(posts.length === 0 && isLoading === false ) && (
                followingsUserLoged.length === 0 ? (
                    <Message>You don't follow anyone yet. Search for new friends!</Message>
                ) : (
                    <Message>No posts found from your friends</Message>
                )
            )}
            {isLoading? (
                <Load><ThreeDots color="#FFFFFF" height={50} width={50} /></Load>
            ) : (
                posts.map((post, i) => <Post key={i} post={post} setHashtagsLists={setHashtagsLists} />)
            )}
            <div ref={scrollObserve}></div>
        </Container>
    );
}