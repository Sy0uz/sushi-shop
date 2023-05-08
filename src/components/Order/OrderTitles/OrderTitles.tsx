import React, { FC } from 'react'
import s from './OrderTitles.module.scss'

const tableTitles = [
    '#',
    'Название',
    'Вес порции',
    'Цена',
    'Кол-во'
]

const OrderTitles: FC = () => {
    return (
        <div className={s.list_title}>
            {
                tableTitles.map((item, i) =>
                    <span
                        key={item}
                        className={i === tableTitles.length - 1 || i === 0 ? s.center : ''}
                    >
                        {
                            item
                        }
                    </span>)
            }
        </div>
    )
}

export default React.memo(OrderTitles);