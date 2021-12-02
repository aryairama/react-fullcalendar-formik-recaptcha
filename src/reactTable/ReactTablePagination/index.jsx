import MOCKDATA from '../MOCK_DATA.json';
import { FilterColumns as COLUMNS } from './columns';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table';
import { useMemo } from 'react';
import { Input } from '../../component/base';
import style from '../ReactTableBasic.module.scss';

const Index = () => {
  const data = useMemo(() => MOCKDATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter } = state;
  return (
    <>
      <Input
        classNameContainer={style['container-input-filter-table']}
        className={style['input-filter-table']}
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        validation={false}
      />
      <div className={style['table-container']}>
        <table className={style['table-container-table']} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr className={style['table-tr']} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className={style['table-header']} {...column.getHeaderProps()}>
                    <div
                      {...column.getSortByToggleProps()}
                      style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      {column.render('Header')}
                      <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                    </div>
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {/* change row with page form hook usePagination*/}
            {/* {row.map((row, i) => { */}
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr className={style['table-tr']} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className={style['table-body']} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={style['pagination-container']}>
        <button className={style['button-pagination']} disabled={!canPreviousPage} onClick={previousPage}>
          Previous
        </button>
        <button className={style['button-pagination']} disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Index;
