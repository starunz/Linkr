import axios from "axios";

const api = axios.create({baseURL: 'http://localhost:5000' })

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const signUp = (body) => {
    const promise = api.post('/sign-up', body)

    return promise;
}

const login = (body) => {
    const promise = api.post('/login', body)

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
}