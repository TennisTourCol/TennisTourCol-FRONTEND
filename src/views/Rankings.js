
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";
import { CustomizedTables } from "../components/Tables/RankingTable";


function createData(pos,nombre, liga, ciudad,puntos) {
    return {pos,nombre, liga, ciudad,puntos};
}


class Rankings extends React.Component {

    render() {
        const senc = [
            createData(1,'Juan Manuel Herrera Moya',"Cundinamarca","Chia",5550),
            createData(2,'David Andres Herrera Moya',"Cundinamarca","Chia",5000),
            createData(3,'Juan Manuel Muñoz Delgadillo',"Cundinamarca","Bogotá",4800),
            createData(4,'Santiago Lopez',"Cundinamarca","Bogotá",4700),
            createData(5,'Cesar David Villamil Ramos',"Cundinamarca","Bogotá",4000),
        ];
        const dobl = [
            createData(1,'Cesar David Villamil Ramos',"Cundinamarca","Bogotá",5500),
            createData(2,'David Andres Herrera Moya',"Cundinamarca","Chia",5000),
            createData(3,'Juan Manuel Muñoz Delgadillo',"Cundinamarca","Bogotá",4800),
            createData(4,'Santiago Lopez',"Cundinamarca","Bogotá",4700),
            createData(5,'Juan Manuel Herrera Moya',"Cundinamarca","Chia",4000),
        ];
    return (
        <div className="content">
            <Container>
                <Row>
                    <Tabs defaultActiveKey="Rankings"
                          id="controlled-tab-example">
                        <Tab eventKey="18 Mas" title="18 Masc">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="18 Masc"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="18 Masc"/>
                                </Tab>

                            </Tabs>

                        </Tab>
                        <Tab eventKey="18 Fem" title="18 Fem">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="18 Fem"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="18 Fem"/>
                                </Tab>

                            </Tabs>

                        </Tab>
                        <Tab eventKey="16 Masc" title="16 Masc">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="16 Masc"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="16 Masc"/>
                                </Tab>

                            </Tabs>
                        </Tab>
                        <Tab eventKey="16 Fem" title="16 Fem">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="16 Fem"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="16 Fem"/>
                                </Tab>

                            </Tabs>
                        </Tab>
                        <Tab eventKey="14 Masc" title="14 Masc">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="14 Masc"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="14 Masc"/>
                                </Tab>

                            </Tabs>
                        </Tab>
                        <Tab eventKey="14 Fem" title="14 Fem">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="14 Fem"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="14 Fem"/>
                                </Tab>

                            </Tabs>
                        </Tab>
                        <Tab eventKey="12 Masc" title="12 Masc">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="12 Masc"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="12 Masc"/>
                                </Tab>

                            </Tabs>
                        </Tab>
                        <Tab eventKey="12 Fem" title="12 Fem">
                            <Tabs defaultActiveKey="Tipo"
                                  id="controlled-tab-example">

                                <Tab eventKey="Senc" title="Sencillos">
                                    <CustomizedTables tipo={senc} nombre="Sencillos" cat="12 Fem"/>
                                </Tab>
                                <Tab eventKey="Dob" title="Dobles">
                                    <CustomizedTables tipo={dobl} nombre="Dobles" cat="12 Fem"/>
                                </Tab>

                            </Tabs>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Rankings;
