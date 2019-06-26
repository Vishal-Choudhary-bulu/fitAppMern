import React, { Component } from 'react'
import './workout.css'

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

        console.log(exercise)
        window.location = '/'
    }

    render() {
        return (
            <div className="container">
                <form onSubmit = {this.handleSubmit}>
                    <div className="input-flds">
                    <div className="inp-field">
                        <label htmlFor="username">User</label>
                        <input type="text" name = "username" value = { this.state.username } onChange = { this.handleChange } className="exe-input"/>
                    </div>
                    
                    <div className="inp-field">
                        <label htmlFor="description">Workout</label>
                        <input type="text" name = "description" value = { this.state.description } onChange = { this.handleChange } className="exe-input"/>
                    </div>

                    <div className="inp-field">
                        <label htmlFor="duration">Duration</label>
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
