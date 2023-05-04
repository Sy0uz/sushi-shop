import { FC, useState } from 'react'
import s from './../../styles/Searchbar.module.scss'

const Searchbar: FC = () => {

    const [value, setValue] = useState<string>('');

    const clearValue = () => {
        setValue('');
    }

    return (
        <div className={s.searchbar_container}>
            <img className={s.loupe} src="images/search.svg" alt="" />
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
                className={s.searchbar}
                placeholder='Поиск...'
            />
            {
                value
                    ?
                    <img className={s.close} src="images/close.svg" alt="" onClick={clearValue} />
                    :
                    <>
                    </>
            }

        </div>
    )
}

export default Searchbar