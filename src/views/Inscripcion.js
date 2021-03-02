import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row} from "reactstrap";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Inscripcion() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="secundary" onClick={handleClickOpen}>
                Inscribirse
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <Card className="card-Inscripcion ">
                    <CardBody>
                        <Row>
                            <Col  xs="auto">
                                <p className="text-center"> ¿Esta seguro de que quiere inscribirse del torneo?</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="auto">
                                <Button onClick={handleClose} outline color="secondary" >
                                    Si
                                </Button>
                            </Col>
                            <Col xs="auto">
                                <Button onClick={handleClose} outline color="secondary">
                                    Cancelar
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
:


                </Card>

            </Dialog>
        </div>
    );
}
