import MOCKDATA from '../MOCK_DATA.json';
import { FilterColumns as COLUMNS } from './columns';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table';
import { useMemo } from 'react';
import { Input, Pagination, ReactTableCheckbox } from '../../component/base';
import style from '../ReactTableBasic.module.scss';

const Index = () => {
  const data = useMemo(() => MOCKDATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    // nextPage,
    // previousPage,
    // canNextPage,
    // canPreviousPage,
    gotoPage,
    // pageCount,
    // pageOptions,
    setPageSize,
    selectedFlatRows,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'select row',
            Header: ({ getToggleAllRowsSelectedProps }) => <ReactTableCheckbox {...getToggleAllRowsSelectedProps()} />,
            Cell: ({ row }) => <ReactTableCheckbox {...row.getToggleRowSelectedProps()} />,
          },
          ...columns,
        ];
      });
    }
  );
  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ReactTableCheckbox {...getToggleHideAllColumnsProps()} label="Hide all column" id="hide_all" />
        {allColumns.map((column) => (
          <div key={column.id}>
            <input type="checkbox" id={column.id} {...column.getToggleHiddenProps()} />
            <label style={{ textTransform: 'capitalize' }} htmlFor={column.id}>
              {column.id}
            </label>
          </div>
        ))}
      </div>
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
        {/* <button className={style['button-pagination']} disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
          {`<<`}
        </button>
        <button className={style['button-pagination']} disabled={!canPreviousPage} onClick={previousPage}>
          Previous
        </button>
        <button className={style['button-pagination']} disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
        <button className={style['button-pagination']} disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>
          {`>>`}
        </button> */}
        <div className={style['input-container']}>
          <select
            className={style['select-page-size']}
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <Input
          classNameContainer={style['input-container']}
          className={style['input-gotopage']}
          validation={false}
          value={pageIndex + 1}
          type="number"
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
        />
        <Pagination
          className={style['pagination-component']}
          totalData={rows.length}
          pageSize={pageSize}
          currentPage={pageIndex + 1}
          numberOfButtons={5}
          setPage={gotoPage}
        />
      </div>
      <pre>
        <code>{JSON.stringify({ selectedRows: selectedFlatRows.map((rows) => rows.original) }, null, 2)}</code>
      </pre>
    </>
  );
};

export default Index;
