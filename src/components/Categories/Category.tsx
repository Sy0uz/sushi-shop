import { FC } from 'react'
import s from './../../styles/Category.module.scss'

interface CategoryProps {
    title: string;
    value: number;
    active?: boolean;
    onClick: (title: number) => void;
}

const Category: FC<CategoryProps> = ({ title, value, onClick, active = false }) => {
    return (
        <li onClick={() => onClick(value)} className={active ? [s.category_container, s.active].join(' ') : s.category_container}>
            {title}
        </li>
    )
}

export default Category