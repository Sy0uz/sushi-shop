import { FC, useState } from 'react';
import { IOrderItem } from '../../../types/IOrderItem';
import s from './OrderItem.module.scss';
import OrderControl from './OrderControl/OrderControl';
import useOrderStore from '../../../store/orderStore';
import { Link } from 'react-router-dom';

interface OrderItemProps {
    item: IOrderItem;
}

const OrderItem: FC<OrderItemProps> = ({ item }) => {

    const [addToExistedOrder, deleteFromOrder] = useOrderStore(state => [state.addToExistedOrder, state.deleteFromOrder]);
    const [deleting, setDeleting] = useState<boolean>(false);

    const addHandler = () => {
        addToExistedOrder(item.id);
    }

    const deleteHandler = () => {
        if (item.count === 1) {
            setDeleting(true);
            setTimeout(() => {
                setDeleting(false);
                deleteFromOrder(item.id);
            }, 400)
        }
        else
            deleteFromOrder(item.id);
    }

    return (
        <Link to={`/sushi/${item.id}`} className={deleting ? [s.order_container, s.deleting].join(' ') : s.order_container}>
            <img className={s.image} src={item.imageUrl} alt={`${item.title}-img`} />
            <h3>{item.title}</h3>
            <span>{item.weight}г.</span>
            <span>{item.price} ₽</span>
            <span className={s.order_count}>
                <OrderControl count={item.count} addOrder={addHandler} deleteOrder={deleteHandler} />
            </span>
        </Link>
    )
}

export default OrderItem;