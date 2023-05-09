export interface ISushi {
    id: number;
    imageUrl: string;
    title: string;
    ingredients: string[];
    weight: number;
    price: number;
    category: number;
    rating: number;
}

export enum CategoriesEnum {
    CLASSIC = "Классические роллы",
    BAKED = "Запеченные роллы",
    TEMPURA = "Темпура",
    MINI = "Мини роллы"
}