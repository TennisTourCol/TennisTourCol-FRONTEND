
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
import AlertDialogSlideScore from './SlideScore';



class MiCalendario extends React.Component {


    render() {
        const rows = [
            { nombre: 'Torneo Toreto', date: '2020-01-05', grado: 4, cupo: 30, precio: '70.000',club:"Club Bogota" },
            { nombre: 'Torneo la Roca' , date: '2020-01-02', grado: 5, cupo: 12, precio: '65.000', club:"La Verdieri"},
        ];

        return (
            <div className="content">
                {rows.map((row) => (
                    <Card className="card-torneo">
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
                                    <p style={{color:"Black"}}> Nombre: {row.nombre}</p>
                                    <p style={{color:"Black"}} className="text-left"> Club: {row.club}</p>
                                    <p style={{color:"Black"}}> Dia: {row.date} </p>
                                    <p style={{color:"Black"}}> Precio: {row.precio} </p>
                                    <AlertDialogSlide/>
                                </Col>

                                    {/*<AlertDialogSlideScore/>
                                    */}
                            </Row>
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    }
}

export default MiCalendario;
