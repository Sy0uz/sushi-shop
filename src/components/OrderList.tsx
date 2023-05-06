import { FC } from 'react'
import { IOrderItem } from '../types/IOrderItem'
import OrderItem from './OrderItem';
import s from './../styles/OrderList.module.scss';

interface OrderListProps {
    list: IOrderItem[];
}

const OrderList: FC<OrderListProps> = ({ list }) => {

    const tableTitles = [
        '#',
        'Название',
        'Вес порции',
        'Цена',
        'Кол-во'
    ]

    return (
        <section>
            <div className={s.list_title}>
                {
                    tableTitles.map((item, i) =>
                        <span
                            key={item}
                            className={i === tableTitles.length - 1 || i === 0 ? s.center : ''}
                        >
                            {
                                item
                            }
                        </span>)
                }
            </div>
            <div className={s.list_items}>
                {
                    list.map((item) => <OrderItem key={item.id} item={item} />)
                }
            </div>

        </section>
    )
}

export default OrderList