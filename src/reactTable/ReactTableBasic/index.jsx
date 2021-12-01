import MOCKDATA from '../MOCK_DATA.json';
import { headerColumns as COLUMNS } from './columns';
import { useTable } from 'react-table';
import { useMemo } from 'react';
import style from '../ReactTableBasic.module.scss';

const Index = () => {
  const data = useMemo(() => MOCKDATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = useTable({
    columns,
    data,
  });

  return (
    <div className={style['table-container']}>
      <table className={style['table-container-table']} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className={style['table-tr']} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className={style['table-header']} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
        <tfoot>
          {footerGroups.map((group) => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map((column) => (
                <th className={style['table-footer']} {...column.getFooterProps()}>
                  {column.render('Footer')}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default Index;
