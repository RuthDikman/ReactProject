import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PhonelinkOffIcon from '@mui/icons-material/PhonelinkOff';
const columns = [
  { id: 'identity', label: 'קוד שירות:', minWidth: 100 ,  format: (value) => value.toLocaleString('en-US'),},
  { id: 'type', label: 'סוג השירות:', minWidth: 170,  format: (value) => value.toLocaleString('en-US'), },
  {
    id: 'dateTime',
    label: 'מועד:',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'clienName',
    label: 'שם לקוח:',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'clienPhone',
    label: 'טלפון:',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'clienEmail',
    label: 'מייל',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(identity, type, dateTime,clienName,clienPhone,clienEmail) {
  return { identity, type, dateTime, clienName,clienPhone,clienEmail };
}
const a=[
  {
 identity:"2545652742" ,
  type:"שליחות",
  dateTime:"#2545652742",
  clienName:"רות",
  clienPhone:"0543453",
  clienEmail:"ruth@gmail.com",
  }
]
const rows = [
  ...a.map((item) =>
  createData(
    item.identity,
    item.type,
    item.dateTime,
    item.clientName,
    item.clientPhone,
    item.clientEmail
  )
),

];

function ListOfOrders() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '65%', overflow:'hidden',position:'absolute', right:'3%',top:'20%'}}>
        {rows.length === 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
          <PhonelinkOffIcon fontSize="large" style={{ fontSize: "10rem" }}/>
        </div>
      ) :(<>
      <TableContainer sx={{ maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table" sx={{direction:'rtl'}}>
          <TableHead>
            <TableRow sx={{direction:'rtl'}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,direction:'rtl'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.description}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      </>
  )}
    </Paper>
  );
}
export default ListOfOrders