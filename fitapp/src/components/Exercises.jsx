import React, { Component } from 'react'
import axios from 'axios'
import './exercises.css'

export default class Exercises extends Component {
    constructor(props){
        super(props);

        this.state = {
            exercises: []
        }
    }

    componentDidMount = (e)=>{
        axios.get("http://localhost:5000/exercises")
        .then(res=>{
            if(res.data.length > 0){
                this.setState({
                    exercises : res.data
                })
                console.log(this.state.exercises)
            }
        })
    }

    handleDelete = (id)=>{
        console.log(id);
        axios.delete("http://localhost:5000/exercises/"+ id)
        .then(res=>{console.log(res.data)
                this.setState({
                    exercises: this.state.exercises.filter(e=> e._id !== id)
                })
            }
        )
        .catch(err=>console.log("got an error "+ err))
    }


    render() {
        return (
            <div className= "container">
                <div className="exerciseList">
                    <h2>Exercises</h2>
                    {this.state.exercises.map((e,key)=>(
                        <div className="exerciseCard" key = {key}>

                           <div className="CardUp">
                            <h3>{e.username}</h3>
                            <h3>{e.description}</h3>
                            </div>

                            <div className="cardDown">
                                <h4>{e.duration}</h4>
                                <h4>{e.date}</h4>
                            </div>

                            <div className="editor">
                                <button className="edit-btn" onClick={this.handleEdit}>
                                    edit
                                </button>
                                <button className="del-btn" onClick = {()=>(this.handleDelete(e._id))}>
                                    delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
