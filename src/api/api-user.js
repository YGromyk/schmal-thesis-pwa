import { axiosAuthenticated } from "./api";

export function me() {
    return axiosAuthenticated.get('/api/user/me');
}