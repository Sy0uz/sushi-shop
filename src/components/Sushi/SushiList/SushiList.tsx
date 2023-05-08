import { FC } from 'react';
import SushiCard from '../SushiCard/SushiCard';
import s from './SushiList.module.scss';
import { ISushi } from '../../../types/ISushi';
import { IOrderItem } from '../../../types/IOrderItem';
import SushiSkeleton from '../SushiSkeleton/SushiSkeleton';
import EmptySushi from '../EmptySushi/EmptySushi';

interface ListProps {
    sushi: ISushi[];
    order: IOrderItem[];
    loading?: boolean;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const SushiList: FC<ListProps> = ({ sushi, order, loading }) => {
    if (loading)
        return (
            <div className={s.wrapper}>
                {
                    arr.map((i) => <SushiSkeleton key={i} />)
                }
            </div>
        )

    if (!sushi.length)
        return <EmptySushi />

    return (
        <div className={s.wrapper}>
            {
                sushi.map((item) => {
                    let isInCart = order.find(elem => elem.id === item.id);
                    return <SushiCard
                        key={item.id}
                        sushi={item}
                        added={isInCart ? true : false}
                        count={isInCart ? isInCart.count : 0}
                    />
                })
            }
        </div>
    )
}

export default SushiList;