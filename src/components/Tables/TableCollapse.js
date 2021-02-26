import React, { useState } from 'react';
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Container from '@material-ui/core/Container';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root} onClick={() => setOpen(!open)}  >
                <TableCell colSpan={6} >
                    {row.tournament.name}
                </TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, paddingRight: '5%', }} >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Hora</TableCell>
                                        <TableCell>Encuentro</TableCell>
                                        <TableCell>Resultado</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.matches.map((matchesRow) => (
                                        <TableRow key={matchesRow.id}>
                                            <TableCell component="th" scope="row">
                                                {matchesRow.date.substring(11, 19)}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {matchesRow.title}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {matchesRow.result && (matchesRow.result.home_sets + " - " + matchesRow.result.away_sets)}
                                                {!matchesRow.result && "0 - 0 No iniciado"}
                                            </TableCell>
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

// Row.propTypes = {
//     row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// };


const useStylesTable = makeStyles({
    root: {
        paddingTop: 60,
        paddingLeft: '5%',
        paddingRight: '5%',
    },
});

export default function CollapsibleTable() {
    const [lista, setLista] = useState([]);
    React.useEffect(() => {
        async function callA() {
            var dateFormat = require('dateformat');
            var date = dateFormat(new Date(), "yyyy-mm-dd");
            const url = "https://tennis-live-data.p.rapidapi.com/matches-by-date/" + date;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": "5aecc03316msh8e7d5b053d4b157p1cc113jsn1c7738ee871e",
                    "x-rapidapi-host": "tennis-live-data.p.rapidapi.com",
                    "useQueryString": true
                },
            });
            try {
                response.json()
                    .then(data => setLista(data.results));
            } catch (e) {
                console.log(e)
            }
        } 
        // callA() 
    }, []);
    const classes = useStylesTable();
    return (
        <Container component="div">
        <TableContainer className={classes.root} >
            <Table aria-label="collapsible table" >
                <TableBody>
                    {lista.map((row) => (
                        <Row key={row.tournament.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    );
}