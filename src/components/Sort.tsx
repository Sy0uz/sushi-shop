import { FC, useEffect, useState } from 'react';
import s from './../styles/Sort.module.scss';
import { SORT_BY } from '../types/IOrderItem';
import useSushiStore from '../store/sushiStore';
import { shallow } from 'zustand/shallow';

interface ISortTypes {
    title: string;
    value: SORT_BY;
}

const Sort: FC = () => {

    const [sortBy, updateSort, orderBy, updateOrder] = useSushiStore(state => [state.sortBy, state.updateSort, state.orderBy, state.updateOrder], shallow);

    const [open, setOpen] = useState(false);

    const sortTypes: ISortTypes[] = [
        { title: 'популярности', value: SORT_BY.POPULARITY },
        { title: 'весу', value: SORT_BY.WEIGHT },
        { title: 'цене', value: SORT_BY.PRICE },
        { title: 'названию', value: SORT_BY.TITLE }
    ]

    const sortHandler = (item: ISortTypes) => {
        updateSort(item.value);
        setOpen(false);
    }

    const orderHandler = () => {
        orderBy === 'desc' ? updateOrder('asc') : updateOrder('desc');
    }

    return (
        <div className={s.wrapper}>
            <span className={s.sort_text}>Сортировать по: </span>
            <span
                onClick={() => setOpen(!open)}
                className={s.sort_type}
            >
                {
                    sortTypes.find((i) => i.value === sortBy)?.title
                }
            </span>
            <div className={!open ? [s.popup, s.closed].join(' ') : s.popup}>
                {
                    sortTypes.map((item) =>
                        <span
                            key={item.value}
                            onClick={() => sortHandler(item)}
                            className={sortBy === item.value ? s.active : ''}
                        >
                            {
                                item.title
                            }
                        </span>
                    )
                }
            </div>
            <button
                onClick={orderHandler}
                className={orderBy === 'asc' ? [s.orderBy_button, s.active].join(' ') : s.orderBy_button}
            >
                <img className={s.orderBy_img} src="/images/sort.svg" alt="" />
            </button>
        </div>
    )
}

export default Sort