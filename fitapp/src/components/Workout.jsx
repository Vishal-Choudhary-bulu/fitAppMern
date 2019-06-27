import React, { Component } from 'react'
import './workout.css'
import axios from 'axios'

export default class Workout extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            description: "",
            duration: "",
            date: new Date(),
            users: []
        }
    }


    componentDidMount = (e)=>{
       
        axios.get("http://localhost:5000/users/")
        .then(res=>{
            
            if(res.data.length > 0 ){
                this.setState({
                    users: res.data.map(user=>user.username),
                    username : res.data[0].username
                })
            }
        })
        .catch(err=>console.log(err))
        
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        axios.post("http://localhost:5000/exercises/add",exercise)
        .then(res=>console.log(res.data))
        .catch(err=> console.log("got an error"))

        this.setState({
            username: "",
            description: "",
            duration: "",
            date: ""
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit = {this.handleSubmit}>
                    <div className="input-flds">
                    <div className="inp-field">
                        <label htmlFor="username">User</label>
                        <select value = {this.state.username} onChange={this.handleChange} required name="username"> 
                            {
                                this.state.users.map((user,key)=>(
                                    <option value = {user} key = {user} >{user}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                    <div className="inp-field">
                        <label htmlFor="description">Workout</label>
                        <input type="text" name = "description" value = { this.state.description } onChange = { this.handleChange } className="exe-input" required autoComplete = "off" />
                    </div>

                    <div className="inp-field">
                        <label htmlFor="duration">Duration (minutes)</label>
                        <input type="Number" name = "duration" value = { this.state.duration } onChange = { this.handleChange } className="exe-input"/>
                    </div>

                    <div className="inp-field">
                        <label htmlFor="date">Date</label>
                        <input type="Date" name = "date" value = { this.state.date } onChange = { this.handleChange } className="exe-input"/>
                    </div>
                    </div>

                    <button className = "form-btn" type="submit">ADD</button>
                </form>
                
            </div>
        )
    }
}
