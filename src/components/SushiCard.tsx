import { FC } from 'react';
import { ISushi } from '../types/ISushi';
import s from './../styles/SushiCard.module.scss';
import useOrderStore from '../store/orderStore';
import AddButton from './AddButton';

interface SushiProps {
    sushi: ISushi;
    added: boolean;
    count: number;
}

const SushiCard: FC<SushiProps> = ({ sushi, added, count }) => {

    const [addToOrder, deleteFromOrder] = useOrderStore(state => [state.addToOrder, state.deleteFromOrder])

    const addHandler = () => {
        addToOrder(sushi);
    }

    const deleteHandler = () => {
        deleteFromOrder(sushi)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.image_container} style={{
                backgroundImage: `url(${sushi.imageUrl})`
            }} />
            <div className={s.information}>
                <h3 className={s.title}>{sushi.title}</h3>
                <div className={s.description_container}>
                    <div>{sushi.price} ₽</div>
                    <div>
                        <AddButton onAdd={addHandler} onDelete={deleteHandler} added={added} count={count} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SushiCard