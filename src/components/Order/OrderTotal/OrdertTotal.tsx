import { FC, useState } from 'react'
import s from './OrderTotal.module.scss'
import useOrderStore from '../../../store/orderStore'
import MyButton from '../../../UI/MyButton/MyButton'
import Modal from '../../Modal/Modal'

const OrdertTotal: FC = () => {

    const [price, amount, clearOrder] = useOrderStore(state => [state.price, state.amount, state.clearOrder])
    const [visible, setVisible] = useState<boolean>(false);

    const onModalOk = () => {
        setTimeout(() => {
            clearOrder();
        }, 300)
    }

    const openModal = () => {
        setVisible(true);
    }

    if (!amount) return <></>

    return (
        <>
            <div className={s.wrapper}>
                <h2 className={s.title}>Корзина</h2>

                <div className={s.price_container}>
                    <span className={s.price_title}>Итого: </span>
                    <span className={s.price}>{price.toLocaleString()}</span>
                </div>

                <div className={s.button_container}>
                    <MyButton className={s.clear_button} onClick={openModal}>
                        <img src="/images/trash.svg" alt="deleteImg" className={s.deleteImg} />
                    </MyButton>
                    <MyButton size='large'>Оплатить</MyButton>
                </div>
            </div>
            <Modal visible={visible} setVisible={setVisible} title='Очистить корзину' onOkText='Очистить' onOk={onModalOk}>
                Вы действительно хотите очистить корзину? Все добавленные товары будут удалены из корзины.
            </Modal>
        </>
    )
}

export default OrdertTotal