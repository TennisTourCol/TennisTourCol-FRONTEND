import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row} from "reactstrap";
import MiPerfil from './MiPerfil'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PerfilJugador() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //"AIzaSyCexgm7W_o5QljnPZCdTiRSb-G7NIpHspw"

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Perfil
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                >
                <Card className="card-torneo ">
                    <MiPerfil/> 
                </Card>

                <Button onClick={handleClose} outline color="secondary">
                    Ok
                </Button>
            </Dialog>
        </div>
    );
}
