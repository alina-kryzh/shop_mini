import axios from "axios";
import {INewAndUpdateProduct} from "../redux/tableReducer";

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com'
})

export const shopApi = {
    getProducts() {
        return instance.get('/shop?pageCount=10')
    },
    postProducts(newProduct: INewAndUpdateProduct) {
        return instance.post('/shop', newProduct)
    },
    putProducts(updateProduct: INewAndUpdateProduct) {
        return instance.put('/shop', updateProduct)
    },
    deleteProducts(id: string) {
        return instance.delete(`/shop?id=${id}`)
    },
    buyProducts(id: string) {
        debugger
        return instance.post('/shop/buy',id)
            .then(response => {alert(response.data.answer)})

    }
}