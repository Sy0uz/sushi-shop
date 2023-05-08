import { FC } from 'react';
import s from './EmptySushi.module.scss';

const EmptySushi: FC = () => {
    return (
        <section className={s.wrapper}>
            <h2 className={s.title}>Ничего не найдено</h2>
            <span>По вашему запросу ничего не найдено. Попробуйте найти что-нибудь другое.</span>
            <img src="/images/sad.svg" className={s.image} alt="sad" />
        </section>
    )
}

export default EmptySushi