import { FC } from 'react'
import s from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../../router'

const Logo: FC = () => {

    return (
        <Link className={s.logo_container} to={RoutePath.HOME}>
            <img src="/images/sushiLogo.svg" alt="" className={s.logotype} />
            <div className={s.title}>
                Syouz's SUSHI
            </div>
        </Link>
    )
}

export default Logo