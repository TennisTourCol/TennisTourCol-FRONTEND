import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import { useState } from "react";
import Moment from 'moment';
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#51bcda",
    }
  },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    fab: {
        position: 'relative',
        left: theme.spacing(1),
        bottom: theme.spacing(-3),
        backgroundColor: '#51bcda',
    },
    fabCancel:{
      position: 'relative',
      bottom: theme.spacing(-3),
      backgroundColor: '#51bcda',
  },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    
}));

export default function TaskForm() {
    const history = useHistory();

    function goToCalendario() {
      history.push("/admin/CalendarioTorneos");
    }
    function handleSubmit(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        const nuevoTorneo = {};
        for (let entry of formData.entries()) {
            nuevoTorneo[entry[0]] = entry[1];
        }
        console.log(nuevoTorneo, "%&%&%&%&%");
    }
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Información del Torneo
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        autoComplete="nombreTorneo"
                                        name="nombreTorneo"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="nombreTorneo"
                                        label="Nombre Torneo"
                                        autoFocus
                                        
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="responsable"
                                        label="Responsable"
                                        name="responsable"
                                        autoComplete="responsable"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="direccion"
                                        label="Dirección-Ubicación"
                                        name="direccion"
                                        autoComplete="direccion"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="ciudad"
                                        label="Ciudad"
                                        name="ciudad"
                                        autoComplete="ciudad"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        type="number"
                                        id="dificultad"
                                        label="Dificultad"
                                        name="dificultad"
                                        autoComplete="dificultad"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="precio"
                                        label="Precio"
                                        type="number"
                                        id="precio"
                                        autoComplete="current-precio"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="fechaInicio"
                                        label="Fecha de Inicio"
                                        type="date"
                                        id="fechaInicio"
                                        defaultValue={Moment(new Date()).format("YYYY-MM-DD")}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <TextField
                                        className={classes.root}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="fechaFin"
                                        label="Fecha Final"
                                        type="date"
                                        id="fechaFin"
                                        defaultValue={Moment(new Date()).format("YYYY-MM-DD")}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Fab className={classes.fabCancel} onClick={goToCalendario}>
                            <Close />
                        </Fab>
                        <Fab  type="submit" className={classes.fab} onSubmit={handleSubmit}>
                            <Check />
                        </Fab>
                    </form>
                </div>
            {/* </ThemeProvider> */}
        </Container>
    );
}