import axios from "axios";

const api = axios.create({baseURL: 'https://linkr-bltml.herokuapp.com' })

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const signUp = (body) => {
    const promisse = api.post('/sign-up', body)

    return promisse;
}

const login = (body) => {
    const promisse = api.post('/login', body)

    return promisse;
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