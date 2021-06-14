import React,{Component} from "react";
import Header from "../../common/header/Header";
import {Typography} from "@material-ui/core";
import '../summary/Summary.css'
import Home from "../home/home";
import ReactDOM from 'react-dom';

class Summary extends Component{

    backtoBookShowHandler= ()=>{
        ReactDOM.render(<Home/>,document.getElementById("root"));
    }

    render() {
        return(<div>
            <Header/>
            <div className={"summary"}>
                <Typography  className={"back"} onClick={this.backtoBookShowHandler}>
                    &#60;Back to Book Show
                </Typography>
            </div>
        </div>)
    }
}

export default Summary;