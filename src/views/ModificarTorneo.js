import Form from 'react-bootstrap/Form'
import React from 'react';
import Button from 'react-bootstrap/Button'
import { Col, Row } from "react-bootstrap";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


export default function ModificarTorneo () {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
            setSelectedDate(date);
    };
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <Form>
                <br/>
                <br/>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre Torneo</Form.Label>
                        <Form.Control type="text" placeholder="Nuevo nombre" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Grado</Form.Label>
                        <Form.Control type="text" placeholder="Grado 1, 2 ,3 " />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Autopista norte cll 225" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Club</Form.Label>
                    <Form.Control placeholder="La verdiery, Club bogota tennis, Los lagartos" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control placeholder="Bogota, Cali, Medellin, Barranquilla"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>


                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha de Inicio"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Fecha de Finalizacion"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Hora"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <div align="center">
                    <Button  variant="danger" type="submit">
                        Eliminar
                    </Button>
                    <Button type="submit">
                        Actualizar
                    </Button>
                </div>
            </Form>
        </div>

    );


}
