
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
import { makeStyles } from '@material-ui/core/styles';
import AlertDialogSlideScore from './SlideScore';



class Resultado extends React.Component {


    render() {
        // const rows=  {partidos:  { 
        //     partido: [{ nombre: 'Toreto', set1: 5, set2: 4 }, { nombre: 'la Roca' , set1: 2, set2: 5}], 
        //     partido: [{nombre: 'David', set1: 1, set2: 4}, {nombre: 'Vidad', set1: 6, set2: 6}],
        //     partido: [{nombre: 'Santiago', set1: 1, set2: 4}, {nombre: 'Agosant', set1: 6, set2: 6}]
        // }};
        const rows=  [ 
            [{ nombre: 'Toreto', set1: 5, set2: 4 }, { nombre: 'la Roca' , set1: 2, set2: 5}], 
            [{nombre: 'David', set1: 1, set2: 4}, {nombre: 'Vidad', set1: 6, set2: 6}],
            [{nombre: 'Santiago', set1: 1, set2: 4}, {nombre: 'Agosant', set1: 6, set2: 6}]
        ];

        const useStyles = makeStyles((theme) => ({
            root: {
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#51bcda",
                }
            },
        }));

        return (
            <div className="content">
                {rows.map((partidos) => (
                    <Card className="card-torneo">
                        <Row >
                            <Col md="4" >
                            <p style={{color:"Black"}}> Nombre: </p>
                            </Col>
                            <Col>
                            <p style={{color:"Black"}}> SET1: </p>
                            </Col>
                            <Col md="4">
                            <p style={{color:"Black"}}> SET2: </p>
                            </Col>
                        </Row>
                        {partidos.map((dupla) => (
                            <CardBody>
                                <Row>
                                    <Col md="4">
                                        <p style={{color:"Black"}}>{dupla.nombre}</p>
                                    </Col>
                                    <Col>
                                        <p style={{color:"Black"}}> {dupla.set1} </p>
                                    </Col>
                                    <Col md="4">
                                        <p style={{color:"Black"}}> {dupla.set2} </p>
                                    </Col>
                                        {/* <AlertDialogSlideScore/> */}
                                </Row>
                            </CardBody>
                        ))}
                    </Card>
                ))}
            </div>
        );
    }
}

export default Resultado;