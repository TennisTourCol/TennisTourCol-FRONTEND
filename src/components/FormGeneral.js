import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Check from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import Close from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {servicePost} from '../service/backService';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
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

export default function FormGeneral({ formulario }) {
    const history = useHistory();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
    function goToCalendario() {
      history.push("/admin/CalendarioTorneos");
    }
    function handleSubmit(e) {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
              setSuccess(true);
              setLoading(false);
            }, 2000);
          }
      
        const formData = new FormData(e.target);
        e.preventDefault();
        const nuevoTorneo = {};
        for (let entry of formData.entries()) {
            nuevoTorneo[entry[0]] = entry[1];
        }
        // console.log(nuevoTorneo, "%&%&%&%&%");
        servicePost("tournament", nuevoTorneo, goToCalendario);
    }
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Información del Torneo
                    </Typography>
                    {loading && <CircularProgress size={100} className={classes.fabProgress} />}
                    <form className={classes.form} onSubmit={handleSubmit}>
                        {formulario()}
                        <Fab className={classes.fabCancel} onClick={goToCalendario}>
                            <Close />
                        </Fab>
                        <Fab  type="submit" className={classes.fab} onSubmit={handleSubmit} disabled={loading}>
                            {success ? <Check /> : <SaveIcon />}
                        </Fab>
                    </form>
                </div>

        </Container>
    );
}

FormGeneral.propTypes = {
    formulario: PropTypes.func.isRequired
  }