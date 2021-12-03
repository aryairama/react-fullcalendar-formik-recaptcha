import React from 'react';
import PropTypes from 'prop-types';
import createPagination from './createPagination';
import style from './style.module.scss';

const Pagination = ({ totalData, pageSize, currentPage, numberOfButtons, setPage, ...props }) => {
  const { pagination } = createPagination({ totalData, pageSize, currentPage, numberOfButtons });
  return (
    <div className={`${style['pagination']} ${props.className}`}>
      <ul className={style['ul']}>
        <li
          className={`${pagination[0] === currentPage && style['disabled']}`}
          onClick={() => setPage(currentPage - 2)}
        >
          Prev
        </li>
        {pagination.map((page, index) => (
          <li key={index} className={`${currentPage === page && style['active']}`} onClick={() => setPage(page - 1)}>
            {page}
          </li>
        ))}
        <li
          className={`${pagination.reverse()[0] === currentPage && style['disabled']}`}
          onClick={() => setPage(currentPage)}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  totalData: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  numberOfButtons: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
