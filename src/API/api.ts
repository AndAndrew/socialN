import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8f1da31f-2ec3-4f0d-8757-bcc4266dd215'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => response.data)
    },

    follow(id: string) {
        return instance.delete(`follow/${id}`);
    },

    unfollow(id: string) {
        return instance.post(`follow/${id}`);
    }
}

export const authAPI = {
    getAuthMe() {
        return instance('auth/me');
    }
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    }
}

