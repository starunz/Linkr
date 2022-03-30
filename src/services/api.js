import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const signUp = (body) => {
    const promise = api.post('/sign-up', body);

    return promise;
}

const login = (body) => {
    const promise = api.post('/login', body);
    return promise;
}

const getUserData = (data) => {
    const promise = api.get(`/users/${data.id}`, config(data.token));
    return promise;
}

const publishPost = ({token, publishData, id}) => {
    const body = {userId: id, ...publishData};
    const promise = api.post('/posts', body, config(token));
    return promise;
}

const getPosts = (hashtag, token) => {
    let promise = null;
    if(hashtag)
    promise = api.get(`/posts?hashtag=${hashtag}`, config(token));
    else
    promise = api.get('/posts', config(token));
    return promise;
}

const likePost = (postId, userId, token) => {
    const body = {
        postId,
        userId
    };
    const promise = api.post('/like', body, config(token));
    return promise;
}

const getLikes = (postId, token) => {
    const promise = api.get(`/like/${postId}`, config(token));
    return promise;
}

const getTrendingHashtags = () => {
    const promise = api.get('/hashtags/trending');
    return promise;
}

const getUsers = (userQuery) => {
    const promise = api.get(`/users?like=${userQuery}`);
    return promise;
}

const deletePost = (postId, token) => {
    const promise = api.delete(`/posts/${postId}`, config(token));
    return promise;
}

const updatePost = (postId, token, description) => {
    const promise = api.put(`/posts/${postId}`, {description}, config(token));
    return promise;
}

const getUserPosts = (userId) => {
    const promise = api.get(`/user/${userId}`);
    return promise;
}

const getFollowingsUser = (userId) => {
    const promise = api.get(`/follows/${userId}`);
    return promise;
}

const postFollow = (followerId, followingId, token) => {
    const body = {
        follower: followerId,
        following: followingId
    }
    const promise = api.post('/follows', body, config(token));
    return promise;
}

const deleteFollow = (followingId, token) => {
    const promise = api.delete(`/follows/${followingId}`, config(token));
    return promise;
}

/*const example = (body ,token) => {
    const configAuth = config(token)
    const promise = api.post('/checkout', body, configAuth)

    return promise;
}*/

export {
    signUp,
    login,
    getUserData,
    publishPost,
    getPosts,
    likePost,
    getLikes,
    getTrendingHashtags,
    deletePost,
    updatePost,
    getUsers,
    getUserPosts,
    getFollowingsUser,
    postFollow,
    deleteFollow,
}