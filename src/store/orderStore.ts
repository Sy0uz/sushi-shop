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
    addToExistedOrder: (sushiId: number) => void;
    deleteFromOrder: (sushiId: number) => void;
    updateOrderPage: (bool: boolean) => void;
    clearOrder: () => void;
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
            order: [
                ...state.order,
                { id: sushi.id, title: sushi.title, imageUrl: sushi.imageUrl, weight: sushi.weight, price: sushi.price, count: 1 }
            ],
            price: state.price + sushi.price,
            amount: state.amount + 1
        }
    )),
    addToExistedOrder: (sushiId: number): void => {
        set(state => (
            {
                order: state.order.map(item => {
                    if (item.id === sushiId) {
                        item.price += (item.price / item.count);
                        item.count++;
                        return item;
                    }

                    return item;
                })
            }
        ))
        set(state => (
            {
                price: state.order.reduce((prev, current) => prev + current.price, 0),
                amount: state.amount + 1
            }
        ))
    },
    deleteFromOrder: (sushiId: number): void => {
        set(state => (
            {
                order: state.order.find(item => item.id === sushiId)?.count === 1
                    ? state.order.filter(item => item.id !== sushiId)
                    : state.order.map(item => {
                        if (item.id === sushiId) {
                            item.price -= (item.price / item.count);
                            item.count--;
                        }
                        return item;
                    }),
            }
        ))
        set(state => (
            {
                price: state.order.reduce((prev, current) => prev + current.price, 0),
                amount: state.amount - 1
            }
        ))
    },
    clearOrder: (): void => {
        set(() => (
            {
                price: 0,
                amount: 0,
                order: []
            }
        ))
    }
})))

export default useOrderStore;