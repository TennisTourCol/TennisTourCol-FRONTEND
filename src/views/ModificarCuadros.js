import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'moment';
import FormControl from "@material-ui/core/FormControl";
import FormGeneral from '../components/FormGeneral'


const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#51bcda",
        }
    },
}));

export default function NuevoTorneo() {
    const classes = useStyles();
    const formulario = () => (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6} >
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} autoComplete="jugadorLocal" name="jugadorLocal" variant="outlined" required fullWidth id="jugadorLocal" label="Jugador Local" autoFocus />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} >
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth id="jugadorVisitante" label="Jugador Visitante" name="jugadorVisitante" autoComplete="jugadorVisitante" />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} >
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} type="number" variant="outlined" required fullWidth id="numeroCancha" label="Número de Cancha" name="numeroCancha" defaultValue="1" autoComplete="numeroCancha" />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} >
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth name="fecha" label="Fecha" type="date" id="fecha" defaultValue={Moment(new Date()).format("YYYY-MM-DD")} />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} >
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth name="hora" label="Hora" type="time" id="hora" defaultValue="12:00" />
                </FormControl>
            </Grid>
        </Grid>
    );
    return (
        <FormGeneral formulario={formulario} />
    );
}