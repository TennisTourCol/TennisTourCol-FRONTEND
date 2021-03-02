import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row} from "reactstrap";
import Map from './Map.js'
import Confirmacion from './Confirmacion'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);
    const [inscripcion, setInscripcion] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const incripcionconf = () => {
        setInscripcion(true);
    };

    const desincripcion = () => {
        console.log("llegue a la funcion");
        return <Confirmacion/>
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Mas informacion
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
                                <p className="text-left"> Club: Bogotá tennis </p>
                                <p> Dia: 12 de Julio </p>
                                <p> Hora: 3:00 pm </p>
                            </Col>


                        </Row>
                        <Row>
                            <Col>
                                <Map/>
                            </Col>
                        </Row>
                        <Row position >
                            <Col  >
                                <Button outline color="success">
                                    Pagar
                                </Button>
                            </Col>
                            <Col xs="auto">
                                    <Confirmacion/>
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

                <Button onClick={handleClose} outline color="secondary">
                    Ok
                </Button>
            </Dialog>
        </div>
    );
}