import { FC, useEffect } from 'react';
import useOrderStore from '../store/orderStore';
import { shallow } from 'zustand/shallow';
import OrderList from '../components/Order/OrderList/OrderList';
import OrdertTotal from '../components/Order/OrderTotal/OrdertTotal';

const OrderPage: FC = () => {

    const [updateOrderPage] = useOrderStore(state => [state.updateOrderPage], shallow);

    useEffect(() => {
        updateOrderPage(true);

        return () => {
            updateOrderPage(false);
        }
    }, [])

    return (
        <>
            <article className='wrapper'>
                <OrderList />
            </article>
            <OrdertTotal />
        </>

    )
}

export default OrderPage;