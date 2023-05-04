import { FC } from 'react'
import Categories from '../components/Categories/Categories'
import SushiList from '../components/SushiList'
import s from '../styles/HomePage.module.scss'

const HomePage: FC = () => {
    return (
        <div className={s.wrapper}>
            <Categories />
            <SushiList />
        </div>
    )
}

export default HomePage