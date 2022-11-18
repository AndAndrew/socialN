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
        return instance.post(`follow/${id}`);
    },
    unfollow(id: string) {
        return instance.delete(`follow/${id}`);
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use ProfileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status});
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

