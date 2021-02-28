
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AlertDialogSlide from './InfoTorneo';
import {Col} from "reactstrap";

class CalendarioTorneos extends React.Component {
  render() {
    const useRowStyles = makeStyles({
      root: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
    });
    
    function createData(name, cantidad, promedioG, promedioI, price, masInfo) {
      return {
        name,
        cantidad,
        promedioG,
        promedioI,
        price,
        masInfo,
        history: [
          { nombre: 'Torneo Toreto', date: '2020-01-05', grado: 4, cupo: 30, precio: '70.000' , masInfo: ''},
          { nombre: 'Torneo la Roca' , date: '2020-01-02', grado: 5, cupo: 12, precio: '65.000', masInfo: ''},
        ],
      };
    }

    const rows = [
      createData('Enero', 159, 6.0, 24 ),
      createData('Febrero', 237, 9.0, 37 ),
      createData('Marzo', 262, 16.0, 24 ),
      createData('Abril', 305, 3.7, 67 ),
      createData('Mayo', 356, 16.0, 49 ),
      createData('Junio', 305, 3.7, 67 ),
      createData('Julio', 262, 16.0, 24 ),
      createData('Agosto', 237, 9.0, 37 ),
      createData('Septiembre', 262, 16.0, 24 ),
      createData('Octubre', 356, 16.0, 49 ),
      createData('Noviembre', 356, 16.0, 49 ),
      createData('Diciembre', 305, 3.7, 67 ),
    ];

    Row.propTypes = {
      row: PropTypes.shape({
        cantidad: PropTypes.number.isRequired,
        promedioG: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
          PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            cupo: PropTypes.number.isRequired,
            grado: PropTypes.number.isRequired,
            precio: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
          }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
      }).isRequired,
    };

    function Row(props) {
      const { row } = props;
      const [open, setOpen] = React.useState(false);
      const classes = useRowStyles();
    
      return (
        <React.Fragment>
          <TableRow className={classes.root} onClick={() => setOpen(!open)}  >
            <TableCell>
              {/* <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton> */}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.cantidad}</TableCell>
            <TableCell align="right">{row.promedioG}</TableCell>
            <TableCell align="right">{row.promedioI}</TableCell>
            {/* <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Grado</TableCell>
                        <TableCell align="right">Cupos</TableCell>
                        <TableCell align="right">Precio Total ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.history.map((historyRow) => (
                        <TableRow key={historyRow.date}>
                          <TableCell component="th" scope="row">
                            {historyRow.date}
                          </TableCell>
                          <TableCell align="left">{historyRow.nombre}</TableCell>
                          <TableCell align="center">{historyRow.grado}</TableCell>
                          <TableCell align="right">{historyRow.cupo}</TableCell>
                          <TableCell align="right">{historyRow.precio}</TableCell>
                          <TableCell align="right"> <AlertDialogSlide/></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
    }
    return (
      <div className="content">

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Mes del torneo</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Promedio Grado</TableCell>
              <TableCell align="right">Promedio Inscripción</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      </div>
    );
  }
}

export default CalendarioTorneos;
