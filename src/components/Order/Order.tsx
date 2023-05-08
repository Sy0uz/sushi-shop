import React, { FC } from 'react'
import OrderList from './OrderList/OrderList'
import { IOrderItem } from '../../types/IOrderItem'
import OrderTitles from './OrderTitles/OrderTitles';

interface OrderProps {
    //list: IOrderItem[];
    //price: number;
    //amount: number;
}

const Order: FC<OrderProps> = ({ /*list, price, amount*/ }) => {

    return (
        <OrderList />
    )
}

export default Order;