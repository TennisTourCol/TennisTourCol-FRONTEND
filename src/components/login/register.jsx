import React from "react";
import Img from "../../components/img/logo.png";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="content">
                    <br/><br/>
                    <div className="image">
                        <img src={Img} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn">
                                Register
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}