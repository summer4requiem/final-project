import React, {useState} from 'react';
import s from './Paginator.module.css';

type PropsTypes = {
    totalDataCount: number,
    pageSize: number,
    changePageOnClick: (page: number) => void,
    currentPage: number,
}

const Paginator: React.FC<PropsTypes> = (props) => {
    const portionSize = 10;
    const pagesCount = Math.ceil(props.totalDataCount / props.pageSize);
    let pages: Array<number> = [];
    let [portionNumber, setPortionNumber] = useState(1);
    let leftSizePortion = (portionNumber - 1) * (portionSize + 1);
    let rightPortionSize = portionNumber * portionSize;
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.paginator}>
            {leftSizePortion > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)} className={s.paginateLeft}
                    aria-label={"previous list items"}>
            </button>}
            <ul className={s.paginatorList}>
                {pages.filter(page => page >= leftSizePortion && page <= rightPortionSize)
                    .map(p => <li className={p === props.currentPage ? s.activePage : s.paginatorListItem}
                                  onClick={() => props.changePageOnClick(p)} key={p}>{p}</li>)
                }
            </ul>
            {rightPortionSize < pagesCount &&
            <button onClick={() => setPortionNumber(portionNumber + 1)} className={s.paginateRight}
                    aria-label={"next list items"}>
            </button>}
        </div>
    )
}

export default Paginator;

