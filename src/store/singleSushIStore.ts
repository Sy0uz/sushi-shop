import { devtools } from "zustand/middleware";
import { ISushi } from "../types/ISushi";
import { create } from 'zustand';
import { PostService } from "../API/PostService";

interface State {
    sushi: ISushi | null;
    isLoading: boolean;
    error: string;
    onSinglePage: boolean;
}

interface Action {
    fetchSushi: (id: string) => void;
    updateSinglePage: (bool: boolean) => void;
}

const useSingleSushiStore = create<State & Action>()(devtools((set) => ({
    sushi: null,
    isLoading: false,
    error: '',
    onSinglePage: false,
    fetchSushi: async (id: string) => {
        set({
            isLoading: true,
        })
        try {
            const result = await PostService.getSingleSushi(id);
            set({
                sushi: result,
                isLoading: false
            })
        } catch (error) {
            set({
                isLoading: false,
                error: 'Произошла ошибка при запросе!'
            })
        }
    },
    updateSinglePage: (bool: boolean) => {
        set({ onSinglePage: bool });
    }
})))

export default useSingleSushiStore;