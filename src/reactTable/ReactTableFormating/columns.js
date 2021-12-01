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
