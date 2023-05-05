import { FC, useEffect } from 'react';
import useOrderStore from '../store/orderStore';
import OrderList from '../components/OrderList';
import s from './../styles/OrderPage.module.scss';

const OrderPage: FC = () => {

    const [order, updateOrderPage, price, amount] = useOrderStore(state => [state.order, state.updateOrderPage, state.price, state.amount]);

    useEffect(() => {
        updateOrderPage(true);

        return () => {
            updateOrderPage(false);
        }
    }, [])

    if (!order.length)
        return (
            <article className='wrapper'>
                <section className={s.empty_order_container}>
                    <h2 className={s.empty_order_title}>Корзина пуста</h2>
                    <span>Ваша корзина пуста. Добавьте в нее товар, прежде чем оформить заказ.</span>
                    <img src="/images/cart.svg" className={s.empty_order_image} alt="Cart" />
                </section>
            </article>
        )

    return (
        <article className='wrapper'>
            <OrderList list={order} />
        </article>
    )
}

export default OrderPage