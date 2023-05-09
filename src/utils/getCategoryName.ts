import { CategoriesEnum } from "../types/ISushi";

export const getCategoryName = (value: number): string => {
    switch (value) {
        case 0:
            return CategoriesEnum.CLASSIC;
        case 1:
            return CategoriesEnum.BAKED;
        case 2:
            return CategoriesEnum.TEMPURA;
        case 3:
            return CategoriesEnum.MINI;
        default:
            return 'Все';
    }
}