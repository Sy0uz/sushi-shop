import { FC } from 'react'
import s from './Header.module.scss'
import Searchbar from './Searchbar/Searchbar'
import Logo from './Logo/Logo'
import OrderBtn from './OrderButton/OrderButton'

interface HeaderProps {
    type?: 'default' | 'short';
}

const Header: FC<HeaderProps> = ({ type = 'default' }) => {
    if (type === 'short')
        return (
            <header className={s.wrapper}>
                <Logo />
            </header>
        )

    return (
        <header className={s.wrapper}>
            <Logo />
            <Searchbar />
            <OrderBtn />
        </header>
    )
}

export default Header