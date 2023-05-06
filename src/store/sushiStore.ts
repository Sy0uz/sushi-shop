import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { ISushi } from '../types/ISushi';
import { PostService } from '../API/PostService';
import { SORT_BY } from '../types/IOrderItem';

interface State {
    sushi: ISushi[];
    isSushiLoading: boolean;
    sortBy: SORT_BY;
    orderBy: 'desc' | 'asc';
    sushiError: string;
    filter: number;
    query: string;
}

interface Action {
    fetchSortedSushi: (sortBy?: SORT_BY, category?: number, order?: 'desc' | 'asc') => void;
    updateSort: (value: SORT_BY) => void;
    updateQuery: (value: string) => void;
    updateOrder: (value: 'desc' | 'asc') => void;
    updateFilter: (value: number) => void;
}

const useSushiStore = create<State & Action>()(devtools((set) => ({
    sushi: [],
    filter: -1,
    sortBy: SORT_BY.POPULARITY,
    isSushiLoading: false,
    sushiError: '',
    orderBy: 'desc',
    query: '',
    fetchSortedSushi: async (sortBy?: SORT_BY, category?: number, order?: 'desc' | 'asc') => {
        set({ isSushiLoading: true });
        try {
            const result = await PostService.getSortedSushi(sortBy, category, order);
            set({ sushi: result, isSushiLoading: false });
        } catch (error) {
            set({ isSushiLoading: false, sushiError: "Не удалось загрузить список." })
        }
    },
    updateOrder: (value: 'desc' | 'asc') => set(() => (
        {
            orderBy: value
        }
    )),
    updateSort: (value: SORT_BY): void => set(() => (
        {
            sortBy: value
        }
    )),
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