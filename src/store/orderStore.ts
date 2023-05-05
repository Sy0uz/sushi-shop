import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { IOrderItem } from '../types/IOrderItem';
import { ISushi } from '../types/ISushi';


interface State {
    price: number;
    amount: number;
    onOrderPage: boolean;
    order: IOrderItem[];
}

interface Action {
    addToOrder: (sushi: ISushi) => void;
    deleteFromOrder: (sushi: ISushi) => void;
    updateOrderPage: (bool: boolean) => void;
}

const useOrderStore = create<State & Action>()(devtools((set) => ({
    price: 0,
    amount: 0,
    order: [],
    onOrderPage: false,
    updateOrderPage: (bool: boolean): void => set(() => (
        {
            onOrderPage: bool
        }
    )),
    addToOrder: (sushi: ISushi): void => set(state => (
        {
            order: state.order.find(item => item.id === sushi.id)
                ? state.order.map(item => {
                    if (item.id === sushi.id) {
                        item.count++;
                        item.price += sushi.price;
                    }
                    return item;
                })
                : [
                    ...state.order,
                    { id: sushi.id, weight: sushi.weight, price: sushi.price, count: 1, title: sushi.title }
                ],
            price: state.price + sushi.price,
            amount: state.amount + 1
        }
    )),
    deleteFromOrder: (sushi: ISushi): void => set(state => (
        {
            order: state.order.find(item => item.id === sushi.id)?.count === 1
                ? state.order.filter(item => item.id !== sushi.id)
                : state.order.map(item => {
                    if (item.id === sushi.id) {
                        item.count--;
                        item.price -= sushi.price;
                    }
                    return item;
                }),
            price: state.price - sushi.price,
            amount: state.amount - 1
        }
    ))
})))

export default useOrderStore;