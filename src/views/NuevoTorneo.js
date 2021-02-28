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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} autoComplete="nombreTorneo" name="nombreTorneo" variant="outlined" required fullWidth id="nombreTorneo" label="Nombre Torneo" autoFocus
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth id="responsable" label="Responsable" name="responsable" autoComplete="responsable"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth id="direccion" label="Dirección-Ubicación" name="direccion" autoComplete="direccion"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth id="ciudad" label="Ciudad" name="ciudad" autoComplete="ciudad"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth type="number" id="dificultad" label="Dificultad" name="dificultad" autoComplete="dificultad"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth name="precio" label="Precio" type="number" id="precio" autoComplete="current-precio"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth name="fechaInicio" label="Fecha de Inicio" type="date" id="fechaInicio" defaultValue={Moment(new Date()).format("YYYY-MM-DD")}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                    <TextField className={classes.root} variant="outlined" required fullWidth name="fechaFin" label="Fecha Final" type="date" id="fechaFin" defaultValue={Moment(new Date()).format("YYYY-MM-DD")}
                    />
                </FormControl>
            </Grid>
        </Grid>

    );
    return (
        <FormGeneral formulario={formulario} />
    );
}