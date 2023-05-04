import { FC, useState } from 'react'
import Category from './Category';
import s from './../../styles/Categories.module.scss'

const Categories: FC = () => {

    const data = [{ title: 'Все', value: -1 }, { title: 'Классические роллы', value: 0 }, { title: 'Запеченные роллы', value: 1 }, { title: 'Темпура', value: 2 }, { title: 'Мини роллы', value: 3 }];

    const [active, setActive] = useState<number>(-1);

    const handler = (value: number) => {
        setActive(value);
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