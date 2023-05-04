import { FC } from 'react';
import { ISushi } from '../types/ISushi';
import s from './../styles/SushiCard.module.scss';

interface SushiProps {
    sushi: ISushi;
}

const SushiCard: FC<SushiProps> = ({ sushi }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.image_container} style={{
                backgroundImage: `url(${sushi.imageUrl})`
            }} />
            <div className={s.information}>
                <h3 className={s.title}>{sushi.title}</h3>
                <div className={s.description_container}>
                    <span>{sushi.price} ₽</span>
                    <button className={s.desctiption_button}>Добавить</button>
                </div>
            </div>

        </div>
    )
}

export default SushiCard