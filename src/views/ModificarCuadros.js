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

export default function NuevoTorneo() {
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
                        Nombre del Torneo
                    </Typography>
                    <Typography component="h1" variant="h6">
                        Modificar Cuadro
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        
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
                            {/* <Grid item xs={12} sm={6} >
                                <FormControl margin="normal" required fullWidth>
                                <TextField className={classes.root} variant="outlined" required fullWidth id="direccion" label="Dirección-Ubicación" name="direccion" autoComplete="direccion" />
                                </FormControl>
                            </Grid> */}
                            <Grid item xs={12} sm={4} >
                                <FormControl margin="normal" required fullWidth>
                                    <TextField className={classes.root} type="number" variant="outlined" required fullWidth id="numeroCancha" label="Número de Cancha" name="numeroCancha" defaultValue="1" autoComplete="numeroCancha" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <FormControl margin="normal" required fullWidth>
                                    <TextField className={classes.root} variant="outlined" required fullWidth name="fecha" label="Fecha" type="date" id="fecha" defaultValue={Moment(new Date()).format("YYYY-MM-DD")}/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <FormControl margin="normal" required fullWidth>
                                    <TextField className={classes.root} variant="outlined" required fullWidth name="hora" label="Hora" type="time" id="hora" />
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
        </Container>
    );
}