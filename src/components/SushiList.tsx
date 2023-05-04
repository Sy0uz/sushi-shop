import { FC, useEffect, useState } from 'react'
import { ISushi } from '../types/ISushi'
import { PostService } from '../API/PostService';
import SushiCard from './SushiCard';
import s from './../styles/SushiList.module.scss'

const SushiList: FC = () => {

    const [list, setList] = useState<ISushi[]>([]);

    const fetchSushi = async () => {
        const response = await PostService.getSushi();
        setList(response);
    }

    useEffect(() => {
        fetchSushi();
    }, [])

    if (!list.length)
        return (
            <div>Загрузка...</div>
        )

    return (
        <div className={s.wrapper}>
            {
                list.map((item) => <SushiCard key={item.id} sushi={item} />)
            }
        </div>
    )
}

export default SushiList