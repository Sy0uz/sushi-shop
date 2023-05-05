import { FC, useEffect, useMemo } from 'react'
import Categories from '../components/Categories/Categories'
import SushiList from '../components/SushiList'
import useSushiStore from '../store/sushiStore';
import { shallow } from 'zustand/shallow';
import useOrderStore from '../store/orderStore';

const HomePage: FC = () => {

    const [sushi, query, filter, fetchSushi] = useSushiStore(state => [state.sushi, state.query, state.filter, state.fetchSushi], shallow);
    const order = useOrderStore(state => state.order);

    useEffect(() => {
        fetchSushi();
    }, [])

    const sushiFiltered = useMemo(() => {
        if (filter === -1)
            return sushi;
        return sushi.filter((item) => item.category === filter);
    }, [filter, sushi])

    const sushiSearch = useMemo(() => {
        if (!query)
            return sushiFiltered;
        return sushiFiltered.filter((item) => item.title.includes(query.trim()));
    }, [query, sushiFiltered])

    return (
        <article className='wrapper'>
            <Categories />
            <SushiList sushi={sushiSearch} order={order} />
        </article>
    )
}

export default HomePage