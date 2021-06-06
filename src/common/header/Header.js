import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)'
    }
}

const TabContainer = function (props) {
    return (
        <Typography component={"div"} style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.prototype = {
    children: PropTypes.node.isRequired
}

class Header extends Component {


    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            contact: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired:"dispNone",
            contactRequired:"dispNone",
        }
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true})
    }

    changeHandler = (event, value) => {
        this.setState({value})
    }

    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false,
            usernameRequired:"dispNone",
            value:0
        })
    }

    loginClickHandler = ()=>{
        this.state.username === ""? this.setState({usernameRequired: "dispBlock"}):
            this.setState({usernameRequired: "dispNone"})

        this.state.password === ""? this.setState({passwordRequired: "dispBlock"}):
            this.setState({passwordRequired: "dispNone"})
    }

    registerClickHandler= ()=>{
        this.state.firstname === ""? this.setState({firstnameRequired: "dispBlock"}):
            this.setState({firstnameRequired: "dispNone"})

        this.state.lastname === ""? this.setState({lastnameRequired: "dispBlock"}):
            this.setState({lastnameRequired: "dispNone"})

        this.state.email === ""? this.setState({emailRequired: "dispBlock"}):
            this.setState({emailRequired: "dispNone"})

        this.state.contact === ""? this.setState({contactRequired: "dispBlock"}):
            this.setState({emailRequired: "dispNone"})
    }

    inputUsernameChangeHandler = (e)=>{
        this.setState({username: e.target.value})
    }
    inputPasswordHandler = (e) =>{
        this.setState({password: e.target.value})
    }

    inputFirstnameChangeHandler = (e) =>{
        this.setState({firstname: e.target.value})
    }

    inputLastnameChangeHandler = (e) =>{
        this.setState({lastname : e.target.value})
    }

    inputEmailChangeHandler = (e)=>{
        this.setState({email: e.target.value})
    }
    inputContactChangeHandler = (e)=>{
        this.setState({contact: e.target.value})
    }

    render() {
        return (
            <div>
                <header className="header">
                    <img src={logo} className="app-logo" alt="Movies App Logo"/>
                    <div className="login-btn">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}> Login</Button>
                    </div>
                </header>


                <Modal style={customStyles} ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                       onRequestClose={this.closeModalHandler}>

                    <Tabs className={"tabs"} value={this.state.value} onChange={this.changeHandler}>
                        <Tab label={"Login"}/>
                        <Tab label={"Register"}></Tab>
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor={"username"}> Username</InputLabel>
                            <Input id={"username"} type={"text"}
                                   username={this.state.username}
                                   onChange={this.inputUsernameChangeHandler}
                            />
                            <FormHelperText className={this.state.usernameRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                                </FormHelperText>
                        </FormControl> <br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor={"password"}> Password</InputLabel>
                            <Input id={"password"} type={"password"}
                            password={this.state.password}
                            onChange={this.inputPasswordHandler}
                            />

                            <FormHelperText className={this.state.passwordRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                            </FormHelperText>
                        </FormControl> <br/> <br/>
                        <Button variant={"contained"} color={"primary"} onClick={this.loginClickHandler}> Login</Button>
                    </TabContainer>
                    }

                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor={"firstname"}> First Name</InputLabel>
                            <Input id={"firstname"} type={"text"}
                                   username={this.state.firstname}
                                   onChange={this.inputFirstnameChangeHandler}
                            />
                            <FormHelperText className={this.state.firstnameRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                            </FormHelperText>
                        </FormControl> <br/><br/>

                        <FormControl required>
                            <InputLabel htmlFor={"lastname"}> Last Name</InputLabel>
                            <Input id={"lastname"} type={"text"}
                                   username={this.state.lastname}
                                   onChange={this.inputLastnameChangeHandler}
                            />
                            <FormHelperText className={this.state.lastnameRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                            </FormHelperText>
                        </FormControl> <br/><br/>

                        <FormControl required>
                            <InputLabel htmlFor={"email"}> Email</InputLabel>
                            <Input id={"email"} type={"text"}
                                   username={this.state.email}
                                   onChange={this.inputEmailChangeHandler}
                            />
                            <FormHelperText className={this.state.emailRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                            </FormHelperText>
                        </FormControl> <br/><br/>

                        <FormControl required>
                            <InputLabel htmlFor={"contact"}> Contact No</InputLabel>
                            <Input id={"contact"} type={"text"}
                                   username={this.state.contact}
                                   onChange={this.inputContactChangeHandler}
                            />
                            <FormHelperText className={this.state.contactRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                            </FormHelperText>
                        </FormControl> <br/><br/>
                        <Button variant={"contained"} color={"primary"} onClick={this.registerClickHandler}> Register</Button>
                    </TabContainer>
                    }
                </Modal>

            </div>
        )
    }
}

export default Header;