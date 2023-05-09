import { FC, useEffect } from 'react'
import useSingleSushiStore from '../store/singleSushIStore'
import { useParams } from 'react-router-dom';
import Sushi from '../components/SingleSushi/Sushi';

type ParamsType = {
    id: string;
}

const SushiPage: FC = () => {

    const params = useParams<ParamsType>();

    const [sushi, isLoading, error, updateSinglePage, fecthSushi] = useSingleSushiStore(state => [state.sushi, state.isLoading, state.error, state.updateSinglePage, state.fetchSushi]);

    useEffect(() => {
        if (params.id !== sushi?.id)
            params.id && fecthSushi(params.id);
    }, [params.id])

    useEffect(() => {
        updateSinglePage(true);
        return () => updateSinglePage(false);
    }, [])

    if (isLoading) return <div>Идёт загрузка...</div>;

    if (!sushi) return <div>{error}</div>

    return (
        <article className='wrapper'>
            <Sushi sushi={sushi} />
        </article>
    )
}

export default SushiPage