import React, { FC } from 'react';
import { ISushi } from '../../../types/ISushi';
import s from './SushiCard.module.scss';
import useOrderStore from '../../../store/orderStore';
import AddButton from '../../../UI/AddButton/AddButton';
import { shallow } from 'zustand/shallow';

interface SushiProps {
    sushi: ISushi;
    added: boolean;
    count: number;
}

const SushiCard: FC<SushiProps> = ({ sushi, added, count }) => {

    const [addToOrder, addToExistedOrder, deleteFromOrder] = useOrderStore(state => [state.addToOrder, state.addToExistedOrder, state.deleteFromOrder], shallow)


    const addHandler = () => {
        added
            ? addToExistedOrder(sushi.id)
            : addToOrder(sushi)
    }

    const deleteHandler = () => {
        deleteFromOrder(sushi.id)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.image_container} style={{
                backgroundImage: `url(${sushi.imageUrl})`
            }} />
            <div className={added ? [s.information, s.added].join(' ') : s.information}>
                <h3 className={s.title}>{sushi.title}</h3>
                <div className={s.description_container}>
                    <div className={s.price}>{sushi.price} ₽</div>
                    <AddButton
                        onAdd={addHandler}
                        onDelete={deleteHandler}
                        added={added}
                        count={count}
                    />
                </div>
            </div>

        </div>
    )
}

export default React.memo(SushiCard);