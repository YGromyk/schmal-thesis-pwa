import { axiosAuthenticated } from "./api";

export function me() {
    return axiosAuthenticated.get('/api/user/me');
}

export function getUserById(userId) {
    return axiosAuthenticated.get(`/api/user/${userId}`);
}

export function all() {
    return axiosAuthenticated.get('/api/user/all');
}

export function followers() {
    return axiosAuthenticated.get('/api/user/followers');
}
export function followings() {
    return axiosAuthenticated.get('/api/user/followings');
}

export function follow(userId) {
    return axiosAuthenticated.post('/api/followings/follow', null, {
        params: {
            userId
        }
    });
}

export function uploadFoto(file) {
    const formData = new FormData();
    formData.append('file', file);

    return axiosAuthenticated.post('/api/user/avatar', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export function updateProfile(profile) {
    return axiosAuthenticated.put(`/api/user/update`, profile);
}