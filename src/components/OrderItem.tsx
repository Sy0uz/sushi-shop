import { FC } from 'react';
import { IOrderItem } from '../types/IOrderItem';
import s from './../styles/OrderItem.module.scss';

interface OrderItemProps {
    item: IOrderItem;
}

const OrderItem: FC<OrderItemProps> = ({ item }) => {
    return (
        <div className={s.order_container}>
            <h3>{item.title}</h3>
            <span>{item.weight}г.</span>
            <span>{item.price} ₽</span>
            <span className={s.order_count}>{item.count}</span>
        </div>
    )
}

export default OrderItem