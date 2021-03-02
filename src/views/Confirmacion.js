import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row} from "reactstrap";

import Map from "./Map";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Confirmacion() {
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
            <Button variant="outlined" color="danger" onClick={handleClickOpen}>
                Retirarse
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <Card className="card-torneo ">
                    <CardBody>
                        <Row>
                            <Col md="2" xs="2">
                                <div className="avatar">
                                    <img
                                        className="img-circle img-no-padding img-responsive"
                                        src={require("components/img/bg.png")}
                                    />
                                </div>
                            </Col>
                            <Col md="7" xs="7">
                                <p className="text-center"> ¿Esta seguro de que quiere retirarse del torneo?</p>
                            </Col>


                        </Row>
                    </CardBody>
                </Card>

                <Button onClick={handleClose} outline color="secondary">
                    Ok
                </Button>

                <Button onClick={handleClose} outline color="secondary">
                    Cancelar
                </Button>
            </Dialog>
        </div>
    );
}
