import { FC } from 'react'
import s from './../../styles/Header.module.scss'
import Searchbar from './Searchbar'
import Logo from './Logo'
import CartBtn from './CartBtn'

interface HeaderProps {
    type?: 'default' | 'short';
}

const Header: FC<HeaderProps> = ({ type = 'default' }) => {
    if (type === 'short')
        return (
            <div className={s.wrapper}>
                <Logo />
            </div>
        )

    return (
        <div className={s.wrapper}>

            <Logo />
            <Searchbar />
            <CartBtn />

        </div>
    )
}

export default Header