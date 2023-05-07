import { FC } from 'react'
import s from './../../styles/OrderBtn.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../router'
import useCartStore from '../../store/orderStore'

const CartBtn: FC = () => {

    const [price, amount] = useCartStore(state => [state.price, state.amount]);

    return (
        <div className={s.cart_container}>
            <Link to={RoutePath.ORDER} className={s.cart_link}>
                <span className={s.price}>{price} ₽</span>
                <div className={s.amount_container}>
                    <div className={s.img_container}>
                        <img src="/images/bagBuy.svg" alt="cart" />
                    </div>
                    <div>{amount}</div>
                </div>
            </Link>
        </div>

    )
}

export default CartBtn