/* eslint-disable react-hooks/exhaustive-deps */
import { FilterColumns as COLUMNS } from './columns';
// import { FilterColumns as COLUMNS } from '../ReactTablePaginationControlled/columns';
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect, useExpanded } from 'react-table';
import { useMemo, useEffect, useState, useCallback, Fragment, useRef } from 'react';
import { Input, Pagination, ReactTableCheckbox } from '../../component/base';
import style from '../ReactTableBasic.module.scss';

const Index = () => {
  const [products, setProducts] = useState({});
  const columns = useMemo(() => COLUMNS, []);
  const datatableContainer = useRef();
  const renderRowSubComponent = useCallback(
    (row) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
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
    // selectedFlatRows,
    allColumns,
    getToggleHideAllColumnsProps,
    setHiddenColumns,
    visibleColumns,
  } = useTable(
    {
      columns,
      data: products?.data || [],
      initialState: {
        pageIndex: 0,
        sortBy: [
          {
            id: 'product_id',
            desc: true,
          },
        ],
        pageSize: 5,
      },
      manualPagination: true,
      manualGlobalFilter: true,
      manualSortBy: true,
      disableMultiSort: true,
      autoResetPage: false,
      autoResetSelectedRows: false,
      getRowId: (row) => row.product_id,
      pageCount: products?.pagination?.pages || 0,
    },
    // useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );
  const { globalFilter, pageIndex, pageSize, sortBy, selectedRowIds, hiddenColumns } = state;
  useEffect(async () => {
    const { data, pagination } = await (
      await fetch(
        `https://api-tokoku.arya-irama-wahono.xyz/products?page=${pageIndex + 1}&limit=${pageSize}&search=${
          globalFilter || ''
        }&order=${sortBy[0]?.desc ? 'DESC' : 'ASC'}&fieldOrder=${sortBy[0]?.id}`
      )
    ).json();
    setProducts({ data, pagination });
  }, [globalFilter || '', pageIndex, pageSize, JSON.stringify(sortBy)]);

  const responsiveExpandedColumn = useCallback(() => {
    console.log(datatableContainer);
    if (datatableContainer.current.scrollWidth > datatableContainer.current.offsetWidth) {
      const allColumnCanExpanded = allColumns.filter((allColumn) => allColumn.expanded === true);
      if (hiddenColumns.length !== allColumnCanExpanded.length) {
        for (let i = visibleColumns.length - 1; i >= 0; i--) {
          if (visibleColumns[i].expanded === true) {
            setHiddenColumns((oldVal) => {
              const uniqHiddenColumns = [...new Set([...oldVal, visibleColumns[i].id])];
              return [...uniqHiddenColumns];
            });
          }
        }
      }
    } else if (
      datatableContainer.current.firstChild.offsetWidth < datatableContainer.current.offsetWidth &&
      hiddenColumns.length > 0
    ) {
      setHiddenColumns([]);
    }
  }, [JSON.stringify(visibleColumns), JSON.stringify(hiddenColumns)]);

  const debounce = useCallback((func, time = 150) => {
    let timer;
    return (event) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, time, event);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(products).length > 0) {
      responsiveExpandedColumn();
    }
  }, [JSON.stringify(products)]);

  useEffect(() => {
    window.addEventListener('resize', debounce(responsiveExpandedColumn, 1000));
    return () => {
      window.removeEventListener('resize', responsiveExpandedColumn);
    };
  }, [responsiveExpandedColumn]);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
      <div className={style['table-container']} ref={datatableContainer}>
        <table className={style['table-container-table']} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr className={style['table-tr']} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={style['table-header']}
                    {...column.getHeaderProps({
                      style: { width: column.width, minWidth: column.minWidth, maxWidth: column.maxWidth },
                    })}
                    // {...column.getHeaderProps()}
                    // custom width cell
                  >
                    <div
                      {...column.getSortByToggleProps()}
                      style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      {column.render('Header')}
                      <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                    </div>
                    {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
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
                <Fragment key={i}>
                  <tr className={style['table-tr']} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className={style['table-body']}
                          {...cell.getCellProps({
                            style: {
                              width: cell.column.width,
                              minWidth: cell.column.minWidth,
                              maxWidth: cell.column.maxWidth,
                            },
                          })}
                          // {...cell.getCellProps()}
                          // custom width cell
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                  {row.isExpanded ? (
                    <tr>
                      <td colSpan={visibleColumns.length}>{renderRowSubComponent(row)}</td>
                    </tr>
                  ) : null}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={style['pagination-container']}>
        <div className={style['input-container']}>
          <select
            className={style['select-page-size']}
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value="5">5</option>
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
          totalData={products?.pagination?.countData || 0}
          pageSize={pageSize}
          currentPage={pageIndex + 1}
          numberOfButtons={5}
          setPage={gotoPage}
        />
      </div>
      <pre>
        <code>{JSON.stringify({ selectedRows: selectedRowIds }, null, 2)}</code>
      </pre>
    </>
  );
};

export default Index;
