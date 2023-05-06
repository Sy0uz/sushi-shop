export interface IOrderItem {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    weight: number;
    count: number;
}

export enum SORT_BY {
    POPULARITY = "rating",
    WEIGHT = "weight",
    PRICE = "price",
    TITLE = "title"
}