import { Input } from '../../component/base';
import { useAsyncDebounce } from 'react-table';
import { useState } from 'react';

const FilterInput = ({ column: { filterValue, setFilter } }) => {
  const [state, setState] = useState(filterValue);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || '');
  }, 1000);
  return (
    <Input
      validation={false}
      value={state || ''}
      onChange={(e) => {
        setState(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};

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
