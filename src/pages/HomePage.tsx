import { FC, useEffect } from 'react'
import SushiList from '../components/Sushi/SushiList/SushiList'
import useSushiStore from '../store/sushiStore';
import useOrderStore from '../store/orderStore';
import Filter from '../components/Filter/Filter';
import Pagination from '../components/Pagination/Pagination';
import useDebounce from '../hooks/useDebounce';
import SushiSkeleton from '../components/Sushi/SushiSkeleton/SushiSkeleton';
import EmptySushi from '../components/Sushi/EmptySushi/EmptySushi';

const HomePage: FC = () => {

    const [sushi, query, updateQuery, filter, sortBy, orderBy, page, hasNextPage, updatePage, isLoading, fetchSortedSushi] = useSushiStore(state => [state.sushi, state.query, state.updateQuery, state.filter, state.sortBy, state.orderBy, state.page, state.hasNextPage, state.updatePage, state.isSushiLoading, state.fetchSortedSushi]);
    const order = useOrderStore(state => state.order);

    const debouncedQuery = useDebounce(query, 400);

    useEffect(() => {
        fetchSortedSushi(sortBy, filter, orderBy, page, query);
    }, [sortBy, filter, orderBy, page, debouncedQuery])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page])

    useEffect(() => {
        return () => {
            updateQuery('');
        }
    }, [])

    if (!sushi.length && !isLoading) return <EmptySushi />

    return (
        <article className='wrapper'>
            <div>
                <Filter />
                {
                    isLoading
                        ? <SushiSkeleton />
                        : <SushiList
                            sushi={sushi}
                            order={order}
                        />
                }

            </div>
            <Pagination totalPages={2} currentPage={page} hasNextPage={hasNextPage} updatePage={updatePage} /> {/*mockapi не возвращает количество доступных страниц или количество элементов, приходиться хардкодить*/}
        </article>
    )
}

export default HomePage;