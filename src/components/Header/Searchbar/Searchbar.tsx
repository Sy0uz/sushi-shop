import { FC } from 'react'
import s from './Searchbar.module.scss'
import useSushiStore from '../../../store/sushiStore';
import { shallow } from 'zustand/shallow'

const Searchbar: FC = () => {

    const [query, updateQuery] = useSushiStore(state => [state.query, state.updateQuery], shallow)

    const clearValue = () => {
        updateQuery('');
    }

    return (
        <div className={s.searchbar_container}>
            <img className={s.loupe} src="/images/search.svg" alt="search" />
            <input
                value={query}
                onChange={e => updateQuery(e.target.value)}
                type="text"
                className={s.searchbar}
                placeholder='Поиск...'
            />
            {
                query
                    ?
                    <img className={s.close} src="/images/close.svg" alt="close" onClick={clearValue} />
                    :
                    <>
                    </>
            }

        </div>
    )
}

export default Searchbar