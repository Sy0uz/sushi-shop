import { FC } from 'react'
import OrderItem from '../OrderItem/OrderItem';
import s from './OrderList.module.scss';
import useOrderStore from '../../../store/orderStore';
import EmptyOrder from '../EmptyOrder/EmptyOrder';
import OrderTitles from '../OrderTitles/OrderTitles';

const OrderList: FC = () => {

    const list = useOrderStore(state => state.order)

    return (
        <div className={s.list_items}>
            {
                !list.length
                    ? <EmptyOrder />
                    : <>
                        <OrderTitles />
                        {
                            list.map((item) => <OrderItem key={item.id} item={item} />)
                        }
                    </>
            }
        </div>
    )
}

export default OrderList;