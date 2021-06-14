import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Header from "../../common/header/Header";
import {
    Button,
    Card,
    CardContent,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import ReactDom from "react-dom";
import Home from "../home/home";
import '../bookshow/Bookshow.css';
import location from "../../common/location";
import language from "../../common/language";
import showDate from "../../common/showdate";
import showTime from "../../common/showTime";
import Summary from "../summary/Summary";

class Bookshow extends Component {

    constructor() {
        super();
        this.state= {
            location:"",
            language:"",
            showDate:"",
            showTime:"",
            tickets:0,
            unitPrice:500,
            availableTickets:20
        }
    }

    backtoDetailsPageHandler = () => {
        ReactDom.render(<Home/>, document.getElementById('root'));
    }

    locationOnChangeHandler = (event)=> {
        this.setState({
            location: event.target.value
        })
    }
    languageOnChangeHandler = event =>{
        this.setState({
            language: event.target.value
        })
    }

    showDateOnChangeHandler=(event)=>{
        this.setState({
            showDate: event.target.value
        });
    }

    showTimeOnChangeHandler=(event)=>{
        this.setState({
            showTime:event.target.value
        });
    }

    ticketChangeHandler=(event)=>{
        this.setState({tickets:event.target.value});
    }

    bookShowButtonHandler=()=>{
       ReactDOM.render(<Summary />,document.getElementById("root"));
    }

    render() {
        return (<div>
            <Header></Header>
            <div className={"bookShow"}>
                <Typography  className={"back"} onClick={this.backtoDetailsPageHandler}>
                    &#60;Back to Movie Details
                </Typography>

                <Card className={"cardStyle"}>
                    <CardContent>
                        <Typography variant={"headline"} component={"h2"}>
                            BOOK SHOW
                        </Typography> <br/>

                        <FormControl required={true} className={"formControl"}>
                            <InputLabel htmlFor={"location"}> Choose Location:</InputLabel>
                            <Select
                            value={this.state.location}
                            onChange={this.locationOnChangeHandler}>
                                {location.map(loc => (
                                    <MenuItem key={"loc"+ loc.id} value={loc.location}>
                                        {loc.location}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl required={true} className={"formControl"}>
                            <InputLabel htmlFor={"language"}> Choose Language:</InputLabel>
                            <Select
                                value={this.state.language}
                                onChange={this.languageOnChangeHandler}>
                                {language.map(lang => (
                                    <MenuItem key={"lang"+ lang.id} value={lang.language}>
                                        {lang.language}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl required={true} className={"formControl"}>
                            <InputLabel htmlFor={"showDate"}> Choose Show Date:</InputLabel>
                            <Select
                                value={this.state.showDate}
                                onChange={this.showDateOnChangeHandler}>
                                {showDate.map(showdate => (
                                    <MenuItem key={"showdate"+ showdate.id} value={showdate.showDate}>
                                        {showdate.showDate}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl required={true} className={"formControl"}>
                            <InputLabel htmlFor={"showTime"}> Choose Show Time:</InputLabel>
                            <Select
                                value={this.state.showTime}
                                onChange={this.showTimeOnChangeHandler}>
                                {showTime.map(time => (
                                    <MenuItem key={"time"+ time.id} value={time.showTime}>
                                        {time.showTime}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl required={true} className={"formControl"}>
                            <InputLabel htmlFor={"tickets"}>Tickets: (Available tickets: {this.state.availableTickets})</InputLabel>
                            <Input id={"tickets"} value={this.state.tickets !== 0 ? this.state.tickets:""} onChange={this.ticketChangeHandler}>
                                {this.state.tickets}
                            </Input>
                        </FormControl> <br/> <br/>
                        <Typography>
                            Unit Price:Rs. {this.state.unitPrice}
                        </Typography><br/>
                        <Typography>
                            Total Price: Rs. {this.state.unitPrice * this.state.tickets}
                        </Typography><br/><br/>

                        <Button variant={"contained"} onClick={this.bookShowButtonHandler} color={"primary"}>
                            BOOK SHOW
                        </Button>
                    </CardContent>
                </Card>

            </div>
        </div>)
    }

}

export default Bookshow;