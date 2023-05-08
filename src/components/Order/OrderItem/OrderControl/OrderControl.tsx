import React, { FC } from 'react';
import s from './OrderControl.module.scss';

interface OrderControlProps {
    count: number;
    addOrder: () => void;
    deleteOrder: () => void;
}

const OrderControl: FC<OrderControlProps> = ({ count, addOrder, deleteOrder }) => {

    return (
        <div className={s.wrapper}>
            <button className={s.button} onClick={deleteOrder}>
                <img src="/images/delete.svg" alt="" />
            </button>
            <div className={s.count}>{count}</div>
            <button className={s.button} onClick={addOrder}>
                <img src="/images/add.svg" alt="" />
            </button>
        </div>
    )
}

export default React.memo(OrderControl);