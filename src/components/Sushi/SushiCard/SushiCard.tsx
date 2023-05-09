import React, { FC } from 'react';
import { ISushi } from '../../../types/ISushi';
import s from './SushiCard.module.scss';
import AddButton from '../../AddButton/AddButton';
import { Link } from 'react-router-dom';

interface SushiProps {
    sushi: ISushi;
    added: boolean;
}

const SushiCard: FC<SushiProps> = ({ sushi, added }) => {
    return (
        <Link to={`./${sushi.id}`} className={s.wrapper}>
            <div className={s.image_container} style={{
                backgroundImage: `url(${sushi.imageUrl})`
            }} />
            <div className={added ? [s.information, s.added].join(' ') : s.information}>
                <h3 className={s.title}>{sushi.title}</h3>
                <div className={s.description_container}>
                    <div className={s.price}>{sushi.price} ₽</div>
                    <AddButton sushi={sushi} />
                </div>
            </div>

        </Link>
    )
}

export default React.memo(SushiCard);