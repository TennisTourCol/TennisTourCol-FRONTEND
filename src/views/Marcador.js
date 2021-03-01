import * as React from 'react'
import PropTypes from 'prop-types';
import "../assets/css/Marcador.css";

import {
    Row,
    Col,
} from "reactstrap";

function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};

function Counter(props) {
    return (
        <div>

                    <div className="counter">
                        <button
                            className="counter-action decrement"
                            onClick={function() {
                                props.onChange(-1);
                            }}
                        >
                            -{" "}
                        </button>

                        <div className="counter-score"> {props.score} </div>

                        <button
                            className="counter-action increment"
                            onClick={function() {
                                props.onChange(+1);
                            }}
                        >
                            +{" "}
                        </button>
                    </div>



    </div>
    );
}

function Counter2(props) {
    return (
        <div>

            <div className="counter">
                <button
                    className="counter-action decrement"
                    onClick={function() {
                        props.onChange2(-1);
                    }}
                >
                    -{" "}
                </button>

                <div className="counter-score"> {props.score2} </div>

                <button
                    className="counter-action increment"
                    onClick={function() {
                        props.onChange2(+1);
                    }}
                >
                    +{" "}
                </button>
            </div>



        </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    score2: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onChange2: PropTypes.func.isRequired,
};

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">{props.name}</div>
            <div className="player-score">
                <Row>
                    <Col>
                        <Counter score={props.score} onChange={props.onScoreChange} />
                    </Col>
                    <Col>
                        <Counter2 score2={props.score2} onChange2={props.onScoreChange2}/>
                    </Col>
                </Row>


            </div>
        </div>
    );
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    score2: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired
};

class Marcador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { players: [
            {
                name: "David Herrera",
                score: 0,
                score2:0,
            },
            {
                name: "Juan Herrera",
                score: 0,
                score2:0,
            }
        ] };
    }

    onScoreChange(index, delta) {
        this.state.players[index].score += delta;
        this.setState(this.state);
    }
    onScoreChange2(index, delta) {
        this.state.players[index].score2 += delta;
        this.setState(this.state);
    }
    render() {
        return (
            <div className="Marcador">
                <Header title={this.props.title} players={this.state.players} />

                <div className="players">
                    {this.state.players.map(
                        function(player, index) {
                            return (
                                <Player
                                    onScoreChange={function(delta) {
                                        this.onScoreChange(index, delta);
                                    }.bind(this)}
                                    onScoreChange2={function(delta) {
                                        this.onScoreChange2(index, delta);
                                    }.bind(this)}
                                    name={player.name}
                                    score={player.score}
                                    score2={player.score2}
                                    key={player.id}
                                />
                            );
                        }.bind(this)
                    )}
                </div>
            </div>
        );
    }
}

Marcador.propTypes = {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            score2: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired // accepts only an array of objects which hasd the specifc valuies listed in the shape()
};

Marcador.defaultProps = {
    // This is the defualt value you can set if there is no specifc title value
    title: "Resultado del partido"

};

export default Marcador;


