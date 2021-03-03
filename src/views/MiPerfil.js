
import React from "react";
import {Row} from "reactstrap";
import {Col}from "reactstrap";
import {CardBody} from  "reactstrap";
import {Card} from  "reactstrap";

import UpdateInfoSlide from './SlideInformation';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import clsx from 'clsx';
import card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));

const useStylesCard = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const useStylesCardHistorial = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function MiPerfil () {

    const classes = useStyles();
    const classesCard = useStylesCard();
    const useStylesCardHistorial = useStylesCard();
    const bull = <span className={classes.bullet}>•</span>;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);

    };

        return (

            <div className="content" >
                <Row >
                    <Col md="5">
                        <Card className={classes.root}>
                            <CardHeader align="center"
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <img
                                            src={require('components/img/prueba.jpeg')}/>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="JUAN MANUEL HERRERA MOYA"
                                subheader="12 DE ABRIL DE 2000"
                            />
                            <CardMedia
                                className={classes.media}
                                image="./components/img/prueba.jpeg"
                                title="Paella dish"
                            >
                                <div align="center"  >
                                <img src={require('components/img/prueba.jpeg')} height={200}/>
                                </div>
                            </CardMedia>
                            <CardContent>
                                <Typography align="center" variant="body1" color="textSecondary" component="p">
                                    Jugador de tennis desde los 5 años, jugo en la liga,
                                    sus principales caracteristicas son el servicio, un jugador
                                    muy activo a llegar por cualqueir bola que el oponente pase y
                                    muy aparcionado por este gran deporte
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography align="center" variant="body1" color="textPrimary" component="p">
                                    Ranking Actual 100
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >

                                </IconButton>
                            </CardActions>
                        </Card>


                        <div>
                            <UpdateInfoSlide/>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col>
                            <h2 align="center">Ultimo Torneo</h2>
                            <Card className="card-torneo ">
                                <CardBody>
                                    <Row>
                                        <Col md="2" xs="2">
                                            <div className="avatar">
                                                <img
                                                    className="img-circle img-no-padding img-responsive"
                                                    src={require('components/img/bg.jpg')}
                                                />
                                            </div>
                                        </Col>
                                        <Col md="7" xs="7">
                                            <p className="text-left"> Club: Bogota tennis </p>
                                            <p> Dia: 12 de Julio </p>
                                            <p> Hora: 3:00 pm </p>

                                        </Col>

                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col>
                            <h2 align="center">Proximo Torneo</h2>
                            <Card className="card-torneo ">
                                <CardBody>
                                    <Row>
                                        <Col md="2" xs="2">
                                            <div className="avatar">
                                                <img
                                                    className="img-circle img-no-padding img-responsive"
                                                    src={require('components/img/bg.jpg')}
                                                />
                                            </div>
                                        </Col>
                                        <Col md="7" xs="7">
                                            <p className="text-left"> Club: Bogota tennis </p>
                                            <p> Dia: 12 de Julio </p>
                                            <p> Hora: 3:00 pm </p>

                                        </Col>

                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
      }


