import { SORT_BY } from "../types/IOrderItem";
import { ISushi } from "../types/ISushi"
import axios from 'axios';

export class PostService {
    static async getSushi(): Promise<ISushi[]> {
        const response = await axios.get<ISushi[]>('https://645650645f9a4f23614088c6.mockapi.io/sushi');
        return response.data;
    }

    static async getSortedSushi(sortBy: SORT_BY, category: number, order: 'desc' | 'asc' = 'desc', page: number = 1, title: string = '', limit: number = 8): Promise<ISushi[]> {

        let obj = {
            sortBy,
            order,
            limit,
            page
        }

        let params = {}

        if (title) {
            params = {
                ...obj,
                title
            }
        }
        else if (category !== -1) params = { ...obj, category }
        else params = obj;

        const reponse = await axios.get<ISushi[]>('https://645650645f9a4f23614088c6.mockapi.io/sushi', {
            params
        })
        return reponse.data;
    }

    static async getSingleSushi(id: string): Promise<ISushi> {
        const response = await axios.get(`https://645650645f9a4f23614088c6.mockapi.io/sushi/${id}`)
        return response.data;
    }
}