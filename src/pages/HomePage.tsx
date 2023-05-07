import { FC, useEffect, useMemo } from 'react'
import SushiList from '../components/SushiList'
import useSushiStore from '../store/sushiStore';
import useOrderStore from '../store/orderStore';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const HomePage: FC = () => {

    const [sushi, query, filter, sortBy, orderBy, page, hasNextPage, updatePage, isLoading, fetchSortedSushi] = useSushiStore(state => [state.sushi, state.query, state.filter, state.sortBy, state.orderBy, state.page, state.hasNextPage, state.updatePage, state.isSushiLoading, state.fetchSortedSushi]);
    const order = useOrderStore(state => state.order);

    useEffect(() => {
        fetchSortedSushi(sortBy, filter, orderBy, page, query);
    }, [sortBy, filter, orderBy, page, query])

    return (
        <article className='wrapper'>
            <Filter />
            <SushiList
                sushi={sushi}
                order={order}
                loading={isLoading}
            />
            <Pagination totalPages={2} currentPage={page} hasNextPage={hasNextPage} updatePage={updatePage} /> {/*mockapi не возвращает количество достурных страниц, приходиться хардкодить*/}
        </article>
    )
}

export default HomePage