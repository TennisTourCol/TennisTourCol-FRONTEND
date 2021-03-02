import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(pos,nombre, liga, ciudad,puntos) {
    return {pos,nombre, liga, ciudad,puntos};
}

const rows = [
    createData(1,'Juan Manuel Herrera Moya',"Cundinamarca","Chia",5550),
    createData(2,'David Andres Herrera Moya',"Cundinamarca","Chia",5000),
    createData(3,'Juan Manuel Muñoz Delgadillo',"Cundinamarca","Bogotá",4800),
    createData(4,'Santiago Lopez',"Cundinamarca","Bogotá",4700),
    createData(5,'Cesar David Villamil Ramos',"Cundinamarca","Bogotá",4000),
];



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export  function CustomizedTables(props) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Posición</StyledTableCell>
                        <StyledTableCell align="center">{props.cat+" "+props.nombre}</StyledTableCell>
                        <StyledTableCell align="center">Liga</StyledTableCell>
                        <StyledTableCell align="center">Ciudad</StyledTableCell>
                        <StyledTableCell align="center">Puntos</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tipo.map((row) => (
                        <StyledTableRow key={row.pos}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.pos}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.nombre}</StyledTableCell>
                            <StyledTableCell align="center">{row.liga}</StyledTableCell>
                            <StyledTableCell align="center">{row.ciudad}</StyledTableCell>
                            <StyledTableCell align="center">{row.puntos}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}