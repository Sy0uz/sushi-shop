import { FC, useMemo } from 'react'
import s from './AddButton.module.scss'
import { ISushi } from '../../types/ISushi';
import useOrderStore from '../../store/orderStore';


interface ButtonProps {
    sushi: ISushi;
}

const AddButton: FC<ButtonProps> = ({ sushi }) => {

    const [order, addToOrder, addToExistedOrder, deleteFromOrder] = useOrderStore(state => [state.order, state.addToOrder, state.addToExistedOrder, state.deleteFromOrder])

    const isInOrder = useMemo(() => {
        return order.find(elem => elem.id === sushi.id);
    }, [order])

    const onAdd = () => {
        if (isInOrder)
            addToExistedOrder(sushi.id)
        else addToOrder(sushi);
    }

    const onDelete = () => {
        deleteFromOrder(sushi.id);
    }

    return (
        <div className={s.button_container} onClick={e => e.preventDefault()}>
            <button onClick={onDelete} className={isInOrder ? s.deleteBtn : [s.deleteBtn, s.closed].join(' ')}>
                <img className={s.deleteBtn_image} src="/images/minus.svg" alt="minus-btn" />
            </button>
            <button
                data-amount={isInOrder?.count}
                onClick={onAdd}
                className={isInOrder ? [s.button, s.added].join(' ') : s.button}
            >
                <span>Добавить</span>
            </button>
        </div>

    )
}

export default AddButton;