import axios from 'axios'

export const singUp = newUser => {
    return axios
        .post('users/signup', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log('added new user')
    })
    .catch(error => {
        console.log(error.response)
    });    
}

export const login = newUser => {
    return axios
        .post('users/login', {
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
            })
            .catch(err => {
                console.log(err)
    })
}

export const getProfile = user => {
    return axios
        .get('users/profile', {
    })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
    })
}