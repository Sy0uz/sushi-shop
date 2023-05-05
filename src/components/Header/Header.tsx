import { FC } from 'react'
import s from './../../styles/Header.module.scss'
import Searchbar from './Searchbar'
import Logo from './Logo'
import OrderBtn from './OrderBtn'

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