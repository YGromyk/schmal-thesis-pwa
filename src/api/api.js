const BASE_URL = 'http://localhost:8080'
const AUTH_SUBPATH = '/api/auth'

export const axiosAuthenticated = require('axios').create({
    baseURL: BASE_URL
});
const axiosAuthentication = require('axios').create({
    baseURL: `${BASE_URL}${AUTH_SUBPATH}`
});;

export function register(register) {
    return axiosAuthentication.post('/register', register)
}

export function login(login) {
    return axiosAuthentication.post('/login', login)
        .then(response => response.data)
        .then(response => {
            saveTokenData(response);
        })
}

function refreshToken() {
    const refresh = {
        refreshToken: localStorage.getItem('refreshToken')
    };
    return axiosAuthentication.post('/refresh', refresh)
        .then(response => response.data)
        .then(response => {
            saveTokenData(response);
            return response;
        });
}

function saveTokenData(data) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('accessExpiresAt', data.accessExpiresAt);
    localStorage.setItem('refreshExpiresAt', data.refreshExpiresAt);
}



axiosAuthenticated.interceptors.request.use((config) => {
    const access = localStorage.getItem('accessToken');
    config.headers['Authorization'] = `Bearer ${access}`;
    config.headers['Access-Control-Allow-Origin'] = "*";
    return config;
});

let refreshingActive = null;
axiosAuthenticated.interceptors.response.use(async (response) => {
    const cache = await caches.open('storage');
    // cache.put(response.request.responseURL, response.request.response);
    return response
}, async (error) => {
    const config = error.config;
    if (error.response && error.response.status === 401 && !config._retry) {
        config._retry = true;
        try {
            refreshingActive = refreshingActive ? refreshingActive : refreshToken();
            let res = await refreshingActive;
            refreshingActive = null;
            if (res.data) {
                saveTokenData(res.data);
            }
            return axiosAuthenticated(config);
        } catch (err) {
            return Promise.reject(err)
        }
    }
    return Promise.reject(error)
});



