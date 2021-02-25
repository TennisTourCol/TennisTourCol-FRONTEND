
import React from "react";
import AlertDialogSlide from './Slide';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

class MiCalendario extends React.Component {
  render() {
    return (

        <div className="content">


            <Card className="card-torneo ">
                <CardBody>
                    <Row>
                        <Col md="4" xs="10">
                            <div className="avatar">
                                <img
                                className="img-circle img-no-padding img-responsive"
                                src={require("components/img/bg.png")}
                                />
                            </div>
                        </Col>
                        <Col md="5" xs="5">
                            <p className="text-left"> Club: Bogota tennis </p>
                            <p> Dia: 12 de Julio </p>
                            <p> Hora: 1:00 pm </p>
                            <AlertDialogSlide/>
                        </Col>

                    </Row>
                </CardBody>

            </Card>
            <br/>
            <Card className="card-torneo ">
                <CardBody>
                    <Row>
                        <Col md="4" xs="2" >
                            <div className="avatar">
                                <img
                                    className="img-circle img-no-padding img-responsive"
                                    src={require("components/img/bg.png")}
                                />
                            </div>
                        </Col>
                        <Col md="7" xs="7">
                            <p className="text-left"> Club: Bogota tennis </p>
                            <p> Dia: 19 de Julio </p>
                            <p> Hora: 3:00 pm </p>
                            <AlertDialogSlide/>
                        </Col>

                    </Row>
                </CardBody>

            </Card>

        </div>

    );
  }
}

export default MiCalendario;
