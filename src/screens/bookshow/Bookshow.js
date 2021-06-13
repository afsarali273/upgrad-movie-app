import React, {Component} from "react";
import Header from "../../common/header/Header";
import {Typography} from "@material-ui/core";
import ReactDom from "react-dom";
import Home from "../home/home";
import '../bookshow/Bookshow.css';

class Bookshow extends Component {

    backtoDetailsPageHandler = () => {
        ReactDom.render(<Home/>, document.getElementById('root'));
    }

    render() {
        return (<div>
            <Header></Header>
            <div className={"back-to-movie-details"}>
                <Typography onClick={this.backtoDetailsPageHandler}>
                    &#60;Back to Movie Details
                </Typography>

            </div>
        </div>)
    }

}

export default Bookshow;