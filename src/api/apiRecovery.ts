import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/',
    headers:{"Content-Type": "application/json",
    'Access-Control-Allow-Origin':'*'}
})

export const recoveryAPI = {
    recovery(email: string) {
        return instance.post(`auth/forgot`, {email})
    }
}