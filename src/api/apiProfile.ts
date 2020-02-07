import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth/'
})

export const profileApi = {
    postProfile(token: string | null) {
        return instance.post(`me`, {token})
    }
}