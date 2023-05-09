import { FC, useState, PropsWithChildren } from 'react'
import s from './Modal.module.scss'
import MyButton from '../../UI/MyButton/MyButton';

interface ModalProps extends PropsWithChildren {
    title: string;
    visible: boolean;
    setVisible: (bool: boolean) => void;
    onOk: () => void;
    onCancel?: () => void;
    onOkText?: string;
    onCancelText?: string;
}

const Modal: FC<ModalProps> = ({ title, visible, setVisible, onOk, onCancel, onOkText = 'Ок', onCancelText = 'Отмена', children }) => {

    const [closing, setClosing] = useState<boolean>(false);

    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            setVisible(false);
        }, 300)
    }


    const onOkHandler = () => {
        closeModal();
        onOk();
    }

    const onCancelHandler = () => {
        onCancel && onCancel();
        closeModal();
    }


    return (
        <div className={!visible ? [s.shadow, s.closed].join(' ') : visible && closing ? [s.shadow, s.closing].join(' ') : s.shadow}>
            <div className={!visible ? [s.modal, s.closed].join(' ') : visible && closing ? [s.modal, s.closing].join(' ') : s.modal}>
                <h2 className={s.title}>
                    {title}
                </h2>
                <MyButton type='ghost' size='small' className={s.close_button} onClick={onCancelHandler}>
                    <img src="/images/close.svg" alt="closeModal" className={s.close_modal} />
                </MyButton>

                <div className={s.content}>
                    {children}
                </div>
                <div className={s.footer}>
                    <MyButton onClick={onOkHandler}>{onOkText}</MyButton>
                    <MyButton className={s.cancel_button} onClick={onCancelHandler}>{onCancelText}</MyButton>
                </div>
            </div>
        </div>

    )
}

export default Modal