import { FC } from 'react'
import s from './../styles/AddButton.module.scss'

interface ButtonProps {
    onAdd?: () => void;
    onDelete?: () => void;
    count?: number;
    added: boolean;
}

const AddButton: FC<ButtonProps> = ({ onAdd, onDelete, added, count }) => {
    return (
        <div className={s.button_container}>
            {
                added
                    ?
                    <button onClick={onDelete} className={s.deleteBtn}>
                        <img className={s.deleteBtn_image} src="/images/minus.svg" alt="" />
                    </button>
                    :
                    <></>
            }
            <button data-amount={count} onClick={onAdd} className={added ? [s.button, s.added].join(' ') : s.button}>
                <span>{added ? 'Добавлен' : 'Добавить'}</span>
            </button>
        </div>

    )
}

export default AddButton