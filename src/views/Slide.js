import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row} from "reactstrap";
import Map from './Map.js'
import Confirmacion from './Confirmacion'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, } from "@stripe/react-stripe-js";
import Payment from './SlidePayment';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const stripe = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");
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
        setInscripcion(false);
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
                        <Row  >
                            <Col  >
                                <Button outline color="success">
                                    <Payment/>
                                </Button>
                            </Col>
                            <Col xs="auto">
                                <Button outline color="danger" onClick={desincripcion}>
                                    <Confirmacion/>
                                </Button>
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