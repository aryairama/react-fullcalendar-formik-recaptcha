import { ReactTableCheckbox } from '../../component/base';

export const FilterColumns = [
  {
    Header: () => null, // No header
    id: 'expander', // It needs an ID
    Cell: ({ row, ...col }) => {
      console.log(col);
      return (
        <div {...row.getToggleRowExpandedProps()} style={{ textAlign: 'center', width: '100%', cursor: 'pointer' }}>
          {row.isExpanded ? '👇' : '👉'}
        </div>
      );
    },
    width: 5,
    maxWidth: 20,
    expanded: false,
  },
  {
    id: 'select row',
    Header: ({ getToggleAllRowsSelectedProps }) => <ReactTableCheckbox {...getToggleAllRowsSelectedProps()} />,
    Cell: ({ row }) => <ReactTableCheckbox {...row.getToggleRowSelectedProps()} />,
    width: 5,
    minWidth: 5,
    expanded: false,
  },
  {
    Header: 'ID',
    accessor: 'product_id',
    disableSortBy: true,
    width: 5,
    minWidth: 5,
    expanded: false,
  },
  {
    Header: 'Product Name',
    accessor: 'name',
    expanded: false,
  },
  {
    Header: 'Product Brand',
    accessor: 'brand',
    expanded: true,
  },
  {
    id: 'price1',
    Header: 'Product Price',
    accessor: 'price',
    expanded: true,
  },
  {
    id: 'price2',
    Header: 'Product Price',
    accessor: 'price',
    expanded: true,
  },
  {
    id: 'price3',
    Header: 'Product Price',
    accessor: 'price',
    expanded: true,
  },
  {
    id: 'price4',
    Header: 'Product Price',
    accessor: 'price',
    expanded: true,
  },
  {
    id: 'price5',
    Header: 'Product Price',
    accessor: 'price',
    expanded: true,
  },
  {
    id: 'price6',
    Header: 'Product Price',
    accessor: 'price',
    expanded: true,
  },
];
