import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { ISushi } from '../types/ISushi';
import { PostService } from '../API/PostService';

interface State {
    sushi: ISushi[];
    filter: number;
    query: string;
}

interface Action {
    fetchSushi: () => void;
    updateQuery: (value: string) => void;
    updateFilter: (value: number) => void;
}

const useSushiStore = create<State & Action>()(devtools((set) => ({
    sushi: [],
    filter: -1,
    query: '',
    fetchSushi: async () => {
        const result = await PostService.getSushi();
        set({ sushi: result });
    },
    updateFilter: (value: number): void => set(() => (
        {
            filter: value
        }
    )),
    updateQuery: (query: string): void => set(() => (
        {
            query: query
        }
    )),
})))

export default useSushiStore;