import { FC } from 'react';
import SushiCard from './SushiCard';
import s from './../styles/SushiList.module.scss';
import { ISushi } from '../types/ISushi';
import { IOrderItem } from '../types/IOrderItem';

interface ListProps {
    sushi: ISushi[];
    order: IOrderItem[];
}

const SushiList: FC<ListProps> = ({ sushi, order }) => {

    if (!sushi.length)
        return (
            <div>Загрузка...</div>
        )

    return (
        <div className={s.wrapper}>
            {
                sushi.map((item) => {
                    let isInCart = order.find(elem => elem.id === item.id);
                    return <SushiCard key={item.id} sushi={item} added={isInCart ? true : false} count={isInCart ? isInCart.count : 0} />
                })
            }
        </div>
    )
}

export default SushiList