import React, { FC } from 'react';
import s from './Pagination.module.scss';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    updatePage: (page: number) => void;
    hasNextPage: boolean;
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, updatePage, hasNextPage }) => {

    let pages = []; //mockapi не возвращает количество достурных страниц, приходиться хардкодить
    if (hasNextPage)
        pages = [...new Array(totalPages)];
    else
        pages = [1];

    const clickHandler = (dir: 1 | -1) => {
        if (dir === -1) {
            if (currentPage === 1) return;
            updatePage(currentPage - 1);
        }
        else if (dir === 1) {
            if (currentPage === pages.length) return;
            updatePage(currentPage + 1);
        }
    }

    return (
        <div className={s.wrapper}>
            <span onClick={() => clickHandler(-1)} className={s.page_button}>
                {'<'}
            </span>
            {
                pages.map((i, idx) =>
                    <span key={idx} onClick={() => updatePage(idx + 1)} className={currentPage === idx + 1 ? [s.page_button, s.active].join(' ') : s.page_button}>{idx + 1}</span>
                )
            }
            <span onClick={() => clickHandler(1)} className={s.page_button}>
                {'>'}
            </span>
        </div>
    )
}

export default React.memo(Pagination)