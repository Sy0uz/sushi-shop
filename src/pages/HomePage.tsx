import { FC, useEffect, useMemo } from 'react'
import SushiList from '../components/SushiList'
import useSushiStore from '../store/sushiStore';
import useOrderStore from '../store/orderStore';
import Filter from '../components/Filter';

const HomePage: FC = () => {

    const [sushi, query, filter, sortBy, orderBy, isLoading, fetchSortedSushi] = useSushiStore(state => [state.sushi, state.query, state.filter, state.sortBy, state.orderBy, state.isSushiLoading, state.fetchSortedSushi]);
    const order = useOrderStore(state => state.order);

    useEffect(() => {
        fetchSortedSushi(sortBy, filter, orderBy);
    }, [sortBy, filter, orderBy])

    const sushiSearch = useMemo(() => {
        if (!query)
            return sushi;
        return sushi.filter((item) => item.title.toLowerCase().includes(query.trim().toLowerCase()));
    }, [query, sushi])

    return (
        <article className='wrapper'>
            <Filter />
            <SushiList
                sushi={sushiSearch}
                order={order}
                loading={isLoading}
            />
        </article>
    )
}

export default HomePage