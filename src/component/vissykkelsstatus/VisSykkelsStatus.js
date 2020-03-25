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

const faaJaNei = (val) => {
  return val ? "Ja" : "Nei";
};

const faaDato = (timestamp) => {
  var dateObj = new Date(timestamp * 1000); 
  return dateObj.toLocaleString(); 

}

export default function VisSykkelsStatus({stations}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>            
            <TableCell>Station Name</TableCell>
            <TableCell align="left">Available Bikes</TableCell>
            <TableCell align="left">Available Docks</TableCell>
            <TableCell align="left">Capacity</TableCell>
            <TableCell align="left">Installed</TableCell>
            <TableCell align="left">Renting</TableCell>
            <TableCell align="left">Returning</TableCell>
            <TableCell align="left">Last Reported</TableCell>
            <TableCell align="left">Adress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {stations.map(
            row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.station_id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">{row.num_bikes_available}</TableCell>
                <TableCell align="right">{row.num_docks_available}</TableCell>
                <TableCell align="right">{row.capacity}</TableCell>
                <TableCell align="center">{faaJaNei(row.is_installed)}</TableCell>
                <TableCell align="center">{faaJaNei(row.is_renting)}</TableCell>
                <TableCell align="center">{faaJaNei(row.is_returning)}</TableCell>
                <TableCell align="center">{faaDato(row.last_reported)} </TableCell>
                <TableCell align="left">{row.address}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
