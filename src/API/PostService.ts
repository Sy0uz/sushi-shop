import { ISushi } from "../types/ISushi"
import axios from 'axios';

export class PostService {
    static async getSushi(): Promise<ISushi[]> {
        const response = await axios.get<ISushi[]>('/sushi.json');
        return response.data;
    }
}