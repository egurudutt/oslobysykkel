import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 50
  },
});


export default function VisSykkelsStatus({stations}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Station name</TableCell>
            <TableCell align="left">Adress</TableCell>
            <TableCell align="left">capacity</TableCell>
            <TableCell align="left">is_installed</TableCell>
            <TableCell align="left">is_renting</TableCell>
            <TableCell align="left">is_returning</TableCell>
            <TableCell align="left">last_reported</TableCell>
            <TableCell align="left">num_bikes_available</TableCell>
            <TableCell align="left">num_docks_available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {stations.map(
            row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.capacity}</TableCell>
                <TableCell align="right">{row.is_installed}</TableCell>
                <TableCell align="right">{row.is_renting}</TableCell>
                <TableCell align="right">{row.is_returning}</TableCell>
                <TableCell align="right">{row.last_reported}</TableCell>
                <TableCell align="right">{row.num_bikes_available}</TableCell>
                <TableCell align="right">{row.num_docks_available}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
