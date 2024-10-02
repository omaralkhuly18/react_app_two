import React from 'react';
import _ from 'lodash';

const Pagination = ({ itemCount, pageSize, currentPage, onChangePage }) => {
    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount === 1) return null; // No need for pagination if there is only one page

    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a onClick={() => onChangePage(page)} className="page-link" href="#">
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
