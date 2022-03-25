import axios from "axios";

const api = axios.create({baseURL: 'http://localhost:4000/' });

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
    const promise = api.get(`users/${data.id}`, config(data.token));
    return promise;
}

const publishPost = ({token, publishData, id}) => {
    const body = {userId: id, ...publishData};
    const promise = api.post('/posts', body, config(token));
    return promise;
}

const getPosts = () => {
    const promise = api.get('/posts');
    return promise;
}

const getTrendingHashtags = () => {
    const promise = api.get('/hashtags/trending');
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
    getTrendingHashtags
}