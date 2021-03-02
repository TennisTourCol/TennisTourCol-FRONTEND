import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button,Card, CardBody, Col, Row,Form,FormGroup,Input} from "reactstrap";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateInfoSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button variant="light" onClick={handleClickOpen}>
                Editar Información
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <Card className="card-torneo ">
                    <CardBody>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="5">
                                    <FormGroup>
                                        <label>Usuario</label>
                                        <Input
                                            placeholder="Username"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="3">
                                    <FormGroup>
                                        <label htmlFor="exampleInputEmail1">
                                            Email
                                        </label>
                                        <Input placeholder="Email" type="email" />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">

                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <FormGroup>
                                        <label>Apodo</label>
                                        <Input
                                            placeholder="Apodo"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <FormGroup>
                                        <label>Contraseña</label>
                                        <Input
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="4">
                                    <FormGroup>
                                        <label>Liga</label>
                                        <Input
                                            placeholder="Liga"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="4">
                                    <FormGroup>
                                        <label>Ciudad</label>
                                        <Input
                                            placeholder="Ciudad"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Descipción</label>
                                        <Input
                                            type="textarea"
                                            defaultValue="Cuenta algo sobre ti."
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="12">
                                    <FormGroup>
                                        <label>Imagen de perfil</label>
                                        <Input placeholder="Imagen" type="file" />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <div className="update ml-auto mr-auto">
                                    <Button
                                        className="btn-round"
                                        variant="light"
                                        type="submit"
                                    >
                                        Actualizar información
                                    </Button>
                                </div>
                            </Row>
                        </Form>

                    </CardBody>
                </Card>
            </Dialog>
        </div>
    );
}