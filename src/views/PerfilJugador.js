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
                    {/* <CardBody>
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
                                <p className="text-center"> TORETO</p>
                            </Col>
                            <Col>
                                <p className="text-center"> TORETO</p>
                            </Col>


                        </Row>
                    </CardBody> */}
                </Card>

                <Button onClick={handleClose} outline color="secondary">
                    Ok
                </Button>
            </Dialog>
        </div>
    );
}
