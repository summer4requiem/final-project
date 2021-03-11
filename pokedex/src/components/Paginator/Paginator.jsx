import React from 'react';
import s from './Paginator.module.css'

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalDataCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <ul className={s.paginator}>
            {pages.map((page) => (
                <li onClick={() =>props.changePageOnClick(page)} className={s.paginatorItem} key={page} >
                    {page}
                </li>
            ))}
        </ul>
    )
}

export default Paginator;

