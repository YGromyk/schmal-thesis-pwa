import { axiosAuthenticated } from "./api";


export function createPost(post) {
    return axiosAuthenticated.post('/api/post', post);
}

export function getMyPosts(userId) {
    return axiosAuthenticated.get(`/api/post/${userId}/all`);
}


export function getPostById(postId) {
    return axiosAuthenticated.get(`/api/post/${postId}`);
}

export function likePost(postId) {
    return axiosAuthenticated.post(`/api/post/like`, {
        postId
    });
}

export function dislikePost(postId) {
    return axiosAuthenticated.delete(`/api/post/like`, {
        data: {
            postId
        }
    });
}

export function writeComment(postId, comment) {
    return axiosAuthenticated.post(`/api/post/comment`, {
        postId,
        comment
    });
}


export function getComments(postId) {
    return axiosAuthenticated.get(`/api/post/${postId}/comments`);
}

export function removeComment(postId, commentId) {
    return axiosAuthenticated.delete(`/api/post/${postId}/comment/${commentId}`);
}