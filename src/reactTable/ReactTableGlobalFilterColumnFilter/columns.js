import { Input } from '../../component/base';

export const columns = [
  {
    Header: 'ID',
    accessor: 'id',
    Footer: 'ID',
  },
  { Header: 'First Name', accessor: 'first_name', Footer: 'First Name' },
  { Header: 'Last Name', accessor: 'last_name', Footer: 'Last Name' },
  { Header: 'Email', accessor: 'email', Footer: 'Email' },
  { Header: 'Gender', accessor: 'gender', Footer: 'Gender' },
  { Header: 'Ip Address', accessor: 'ip_address', Footer: 'Ip Address' },
];

export const headerColumns = [
  {
    Header: 'ID',
    accessor: 'id',
    Footer: 'ID',
  },
  {
    Header: 'Name',
    columns: [
      { Header: 'First Name', accessor: 'first_name', Footer: 'First Name' },
      { Header: 'Last Name', accessor: 'last_name', Footer: 'Last Name' },
    ],
    Footer: 'Name',
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Email',
        accessor: 'email',
        Footer: 'Email',
        Cell: ({ value }) => <span style={{ backgroundColor: 'red' }}>{value}</span>,
      },
      { Header: 'Gender', accessor: 'gender', Footer: 'Gender' },
      { Header: 'Ip Address', accessor: 'ip_address', Footer: 'Ip Address' },
    ],
    Footer: 'Info',
  },
];

const FilterInput = ({ column: { filterValue, setFilter } }) => (
  <Input validation={false} value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
);

export const FilterColumns = [
  {
    Header: 'ID',
    accessor: 'id',
    Footer: 'ID',
    Filter: FilterInput,
    disableFilters: true,
    disableGlobalFilter: true,
  },
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'first_name',
        Footer: 'First Name',
        Filter: FilterInput,
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
        Footer: 'Last Name',
        Filter: FilterInput,
      },
    ],
    Footer: 'Name',
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Email',
        accessor: 'email',
        Footer: 'Email',
        Cell: ({ value }) => <span style={{ backgroundColor: 'red' }}>{value}</span>,
        Filter: FilterInput,
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        Footer: 'Gender',
        Filter: FilterInput,
      },
      {
        Header: 'Ip Address',
        accessor: 'ip_address',
        Footer: 'Ip Address',
        Filter: FilterInput,
      },
    ],
    Footer: 'Info',
  },
];
