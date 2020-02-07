import axios from "axios";

const instance = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/auth/"
});


export const apiRegistration = {
    sendEmail (email: string, password: string) {
        return instance.post("register", {email, password})
    }
};