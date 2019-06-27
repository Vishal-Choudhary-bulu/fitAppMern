import React, { Component } from 'react'
import axios from 'axios'

export default class Users extends Component {
    constructor(props){
        super(props);

        this.state= { 
            username : ""
        }
    }

    handleChange = (e)=>{
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(`new user ${this.state.username} created !!!`)
        const user = {
            username: this.state.username
        }
        axios.post('http://localhost:5000/users/add',user)
        .then(res=>console.log(res.data))


        this.setState({
            username: ""
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <div className="inp-field">
                        <label htmlFor="username">User : </label>
                    <input type="text" autoComplete="off" required name="username" value={this.state.username} onChange={this.handleChange} className = "exe-input"/>
                    </div>
                    <button className = "form-btn" type="submit">ADD</button>
                </form>
            </div>
        )
    }
}
