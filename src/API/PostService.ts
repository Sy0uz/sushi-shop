import { SORT_BY } from "../types/IOrderItem";
import { ISushi } from "../types/ISushi"
import axios from 'axios';

export class PostService {
    static async getSushi(): Promise<ISushi[]> {
        const response = await axios.get<ISushi[]>('https://645650645f9a4f23614088c6.mockapi.io/sushi');
        return response.data;
    }

    static async getSortedSushi(sortBy?: SORT_BY, category?: number, order: 'desc' | 'asc' = 'desc'): Promise<ISushi[]> {
        const reponse = await axios.get<ISushi[]>('https://645650645f9a4f23614088c6.mockapi.io/sushi', {
            params: {
                sortBy,
                category: category !== undefined && category !== -1 ? category : '',
                order
            }
        })
        return reponse.data;
    }
}