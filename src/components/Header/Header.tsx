import { FC } from 'react'
import s from './Header.module.scss'
import Searchbar from './Searchbar/Searchbar'
import Logo from './Logo/Logo'
import OrderBtn from './OrderButton/OrderButton'

interface HeaderProps {
    type?: 'default' | 'order' | 'single';
}

const Header: FC<HeaderProps> = ({ type = 'default' }) => {
    return (
        <header className={type === 'single' ? [s.wrapper, s.single].join(' ') : s.wrapper}>
            {
                type === 'order'
                    ? <>
                        <Logo />
                    </>
                    : type === 'single'
                        ? <>
                            <Logo />
                            <OrderBtn />
                        </>
                        : <>
                            <Logo />
                            <Searchbar />
                            <OrderBtn />
                        </>
            }
        </header>
    )
}

export default Header