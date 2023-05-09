import { FC } from 'react';
import SushiCard from '../SushiCard/SushiCard';
import { ISushi } from '../../../types/ISushi';
import { IOrderItem } from '../../../types/IOrderItem';

interface ListProps {
    sushi: ISushi[];
    order: IOrderItem[];
}

const SushiList: FC<ListProps> = ({ sushi, order, }) => {

    return (
        <div className='sushiList'>
            {
                sushi.map((item) => <SushiCard
                    key={item.id}
                    sushi={item}
                    added={order.find(elem => elem.id === item.id) ? true : false}
                />
                )
            }
        </div>
    )
}

export default SushiList;