import React, { FC } from 'react';
import Category from '../Category/Category';
import Sort from '../Sort/Sort';
import s from './Filter.module.scss';

const Filter: FC = () => {
    return (
        <div className={s.wrapper}>
            <Category />
            <Sort />
        </div>
    )
}

export default React.memo(Filter);