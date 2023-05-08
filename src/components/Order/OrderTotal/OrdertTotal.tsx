import { FC } from 'react'
import s from './OrderTotal.module.scss'
import useOrderStore from '../../../store/orderStore'
import MyButton from '../../../UI/MyButton/MyButton'

const OrdertTotal: FC = () => {

    const [price, amount] = useOrderStore(state => [state.price, state.amount])

    if (!amount)
        return (
            <></>
        )

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Корзина</h2>

            <div className={s.price_container}>
                <span className={s.price_title}>Итого: </span>
                <span className={s.price}>{price}</span>
            </div>

            <div className={s.button_container}>
                <MyButton size='large'>Оплатить</MyButton>
            </div>
        </div>
    )
}

export default OrdertTotal