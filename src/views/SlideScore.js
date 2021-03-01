import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row} from "reactstrap";
import PropTypes from 'prop-types';
import Marcador from './Marcador';
import Map from "./Map";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlideScore() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const INITIAL_STATE = {
        players: [
            {
                name: "Mahmoud Ashraf",
                score: 31,
            },
            {
                name: "Ahmed mohamed",
                score: 20,
            },
            {
                name: "Ali samir",
                score: 50,
            },
        ],
    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Marcador
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}


            >

                <card>
                    <Marcador jugadores={INITIAL_STATE}/>
                </card>
                <Button onClick={handleClose} outline color="secondary" >
                    Ok
                </Button>
            </Dialog>
        </div>
    );
}