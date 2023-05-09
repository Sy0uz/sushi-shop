import { FC } from 'react'
import CategoryItem from './CategoryItem/CategoryItem';
import s from './Category.module.scss'
import useSushiStore from '../../store/sushiStore';
import { shallow } from 'zustand/shallow';
import { CategoriesEnum } from '../../types/ISushi';

const data = [{ title: 'Все', value: -1 }, { title: CategoriesEnum.CLASSIC, value: 0 }, { title: CategoriesEnum.BAKED, value: 1 }, { title: CategoriesEnum.TEMPURA, value: 2 }, { title: CategoriesEnum.MINI, value: 3 }];

const Categories: FC = () => {

    const [filter, updateFilter] = useSushiStore(state => [state.filter, state.updateFilter], shallow);

    const handler = (value: number) => {
        updateFilter(value);
    }

    return (
        <ul className={s.categories_container}>
            {
                data.map(item =>
                    <CategoryItem
                        key={item.value}
                        title={item.title}
                        value={item.value}
                        active={filter === item.value ? true : false}
                        onClick={handler}
                    />
                )
            }
        </ul>
    )
}

export default Categories;