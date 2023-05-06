import { FC } from 'react';
import SushiCard from './SushiCard';
import s from './../styles/SushiList.module.scss';
import { ISushi } from '../types/ISushi';
import { IOrderItem } from '../types/IOrderItem';
import SushiSkeleton from './SushiSkeleton';

interface ListProps {
    sushi: ISushi[];
    order: IOrderItem[];
    loading?: boolean;
}

const SushiList: FC<ListProps> = ({ sushi, order, loading }) => {

    if (loading)
        return (
            <div className={s.wrapper}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SushiSkeleton key={i} />)
                }
            </div>
        )

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

export default SushiList