import { FC } from 'react'
import s from './AddButton.module.scss'

interface ButtonProps {
    onAdd: () => void;
    onDelete: () => void;
    count: number;
    added: boolean;
}

const AddButton: FC<ButtonProps> = ({ onAdd, onDelete, added, count }) => {
    return (
        <div className={s.button_container}>
            <button onClick={onDelete} className={added ? s.deleteBtn : [s.deleteBtn, s.closed].join(' ')}>
                <img className={s.deleteBtn_image} src="/images/minus.svg" alt="minus-btn" />
            </button>
            <button
                data-amount={count}
                onClick={onAdd}
                className={added ? [s.button, s.added].join(' ') : s.button}
            >
                <span>Добавить</span>
            </button>
        </div>

    )
}

export default AddButton