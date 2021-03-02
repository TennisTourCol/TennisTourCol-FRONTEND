import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row} from "reactstrap";

import Map from "./Map";
import Inscripcion from "./Inscripcion";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);
    const [inscripcion,setInscripcion] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const desincripcion = () => {
        setInscripcion(false);
    };
    const incripcionconf = () => {
        setInscripcion(true);
    };

    return (
        <div>
            <Button variant="outlined" color="secundary" onClick={handleClickOpen}>
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
                                <p className="text-center"> Club: Bogota tennis </p>
                                <p className="text-center"> Dia: 12 de Julio </p>
                                <p className="text-center"> Hora: 3:00 pm </p>
                                <p className="text-center"> GRADO 4 y 5 </p>
                            </Col>


                        </Row>
                        <Row>
                            <Col>
                                <div >
                                    <Map/>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <Button outline color="danger" onClick={desincripcion}>
                        <Inscripcion/>
                    </Button>
                </Card>

                <Button onClick={handleClose} outline color="secondary">
                    Ok
                </Button>
            </Dialog>
        </div>
    );
}
