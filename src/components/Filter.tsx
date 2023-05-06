import React, { FC } from 'react';
import Categories from './Categories/Categories';
import Sort from './Sort';
import s from './../styles/Filter.module.scss';

const Filter: FC = () => {
    return (
        <div className={s.wrapper}>
            <Categories />
            <Sort />
        </div>
    )
}

export default React.memo(Filter);