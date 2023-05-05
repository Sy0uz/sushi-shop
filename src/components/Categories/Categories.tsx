import { FC } from 'react'
import Category from './Category';
import s from './../../styles/Categories.module.scss'
import useSushiStore from '../../store/sushiStore';
import { shallow } from 'zustand/shallow'

const Categories: FC = () => {

    const data = [{ title: 'Все', value: -1 }, { title: 'Классические роллы', value: 0 }, { title: 'Запеченные роллы', value: 1 }, { title: 'Темпура', value: 2 }, { title: 'Мини роллы', value: 3 }];

    const [active, updateFilter] = useSushiStore(state => [state.filter, state.updateFilter], shallow);

    const handler = (value: number) => {
        updateFilter(value);
    }

    return (
        <ul className={s.categories_container}>
            {
                data.map(item =>
                    <Category
                        key={item.value}
                        title={item.title}
                        value={item.value}
                        active={active === item.value ? true : false}
                        onClick={handler}
                    />
                )
            }
        </ul>
    )
}

export default Categories