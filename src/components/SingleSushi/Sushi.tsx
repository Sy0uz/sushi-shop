import { FC } from 'react'
import { ISushi } from '../../types/ISushi'
import s from './Sushi.module.scss'
import { getCategoryName } from '../../utils/getCategoryName';

import AddButton from '../AddButton/AddButton';

interface SushiProps {
    sushi: ISushi;
}

const Sushi: FC<SushiProps> = ({ sushi }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.head}>
                <img src={sushi.imageUrl} alt="sushi" className={s.image} />
                <div className={s.content}>
                    <div className={s.text}>
                        <div className={s.header}>
                            <h2 className={s.title}>{sushi.title}</h2>
                            <span>{getCategoryName(sushi.category)}</span>
                        </div>


                        <div className={s.ingredient_container}>
                            {
                                sushi.ingredients.map((item) => <span key={item} className={s.ingredient}>{item.toLocaleLowerCase()}</span>)
                            }
                        </div>
                    </div>

                    <div className={s.info}>
                        <span className={s.price}>{sushi.price} ₽</span>
                        <span>{sushi.weight}г.</span>
                        <div className={s.button}>
                            <AddButton sushi={sushi} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.carousel}>
                Карусель
            </div>
        </div>
    )
}

export default Sushi