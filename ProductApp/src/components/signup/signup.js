import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import axios from 'axios';


class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            contact: '',
            password: '',
            pswrepeat: '',
            userList: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentWillMount() {
        this.getAllUsers()
    }

    async getAllUsers() {
        await axios.get("http://localhost:3001/users").then((responseData) => {
            this.setState({
                userList: responseData.data
            })
        })
        console.log(this.state.userList.length)
    }


    handleSubmit(event) {
        event.preventDefault();
        const userDetails = {
            email: this.state.email,
            username: this.state.username,
            contact: this.state.contact,
            password: this.state.password
        }
        var flag = 0;
        if (this.state.userList.length !== 0) {
            for (var i = 0; i < this.state.userList.length; i++) {
                if (userDetails.email === this.state.userList[i].email) {
                    alert("user has been registered already")
                    flag = 1;

                }
            }
            console.log(i)
            if (i === this.state.userList && flag !== 1) {
                axios.post("http://localhost:3001/users", userDetails).then((data) => {
                    console.log(data)
                    this.props.history.push('/login')
                })
            }
        }
        else {
            axios.post("http://localhost:3001/users", userDetails).then((data) => {
                this.props.history.push('/login')
            })
        }
    }

    render() {
        return (
            <div className="signupBackdrop">
                <form className="signupContainer">
                    <div className="row">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr></hr>
                        <div className="col">
                            <label><b>Email</b></label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={this.handleChange}
                                required
                            />

                            <label><b>Username</b></label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                onChange={this.handleChange}
                                required
                            />

                            <label><b>Contact No</b></label>
                            <input
                                type="number"
                                placeholder="Enter phone number"
                                name="contact"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="col">
                            <label><b>Password</b></label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                onChange={this.handleChange}
                                required
                            />

                            <label><b>Repeat Password</b></label>
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                name="pswrepeat"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="clearfix">
                        <button type="submit" onClick={this.handleSubmit} className="signupbtn">REGISTER</button>
                        <br>
                        </br>
                        <div className="link">
                            <Link to="/login">Existing  User? Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignUp;