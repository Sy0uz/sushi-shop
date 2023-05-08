import React, { FC, useEffect } from 'react'
import SushiList from '../components/Sushi/SushiList/SushiList'
import useSushiStore from '../store/sushiStore';
import useOrderStore from '../store/orderStore';
import Filter from '../components/Filter/Filter';
import Pagination from '../components/Pagination/Pagination';

const HomePage: FC = () => {

    const [sushi, query, updateQuery, filter, sortBy, orderBy, page, hasNextPage, updatePage, isLoading, fetchSortedSushi] = useSushiStore(state => [state.sushi, state.query, state.updateQuery, state.filter, state.sortBy, state.orderBy, state.page, state.hasNextPage, state.updatePage, state.isSushiLoading, state.fetchSortedSushi]);
    const order = useOrderStore(state => state.order);

    useEffect(() => {
        fetchSortedSushi(sortBy, filter, orderBy, page, query);
    }, [sortBy, filter, orderBy, page, query])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page])

    useEffect(() => {
        return () => {
            updateQuery('');
        }
    }, [])

    return (
        <article className='wrapper'>
            <div>
                <Filter />
                <SushiList
                    sushi={sushi}
                    order={order}
                    loading={isLoading}
                />
            </div>
            <Pagination totalPages={2} currentPage={page} hasNextPage={hasNextPage} updatePage={updatePage} /> {/*mockapi не возвращает количество достурных страниц, приходиться хардкодить*/}
        </article>
    )
}

export default HomePage;