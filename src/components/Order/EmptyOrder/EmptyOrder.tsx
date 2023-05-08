import { FC } from 'react'
import s from './EmptyOrder.module.scss'
import MyButton from '../../../UI/MyButton/MyButton'
import { useNavigate } from 'react-router-dom'

const EmptyOrder: FC = () => {

    const route = useNavigate();

    const clickHanlder = () => {
        route('/home');
    }

    return (
        <section className={s.wrapper}>
            <h2 className={s.title}>Корзина пуста</h2>
            <span>Ваша корзина пуста. Добавьте в нее товар, прежде чем оформить заказ.</span>
            <img src="/images/cart.svg" className={s.image} alt="Cart" />
            <MyButton onClick={clickHanlder} size='large'>Вернуться к товарам</MyButton>
        </section>
    )
}

export default EmptyOrder