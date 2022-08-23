import { axiosAuthenticated } from "./api";


export function createPost(post) {
    return axiosAuthenticated.post('/api/post', post);
}

export function getMyPosts() {
    return axiosAuthenticated.get('/api/post/all');
}