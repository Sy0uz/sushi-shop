import { FC, useState } from 'react'
import s from './../../styles/Cartbtn.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../router'

const CartBtn: FC = () => {

    const [price, setPrice] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);

    return (
        <div className={s.cart_container}>
            <Link to={RoutePath.CART} className={s.cart_link}>
                <span className={s.price}>{price} ₽</span>
                <div className={s.amount_container}>
                    <div className={s.img_container}><img src="/images/bagBuy.svg" alt="cart" /></div>
                    <div>{amount}</div>
                </div>
            </Link>
        </div>

    )
}

export default CartBtn