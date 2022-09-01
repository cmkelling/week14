import React, {Component,  useState } from "react";
import './App.css'

export default class ReviewForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            content: '',}
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    resetReview(){
        this.setState({
            name: '',
            content: '',
        });
    }
//function to submit form
    submitForm(event){
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.resetReview();
        console.log("It submitted!");
    }
    
    handleChange(event){
        let target = event.target;
        let name = target.name;
        let value = target.value;
        console.log(name + " " + value);
        this.setState({
            [name]: value
        });
    }
//form
    render() {
        return (
            <form className="card form">
                <label>Leave Your Review Here</label>
                <input type="text" id="name" name="name"  placeholder="Your Name" value={this.name} onChange={this.handleChange}></input>
                <input type="text"  id="content" name="content" placeholder="Your Movie Review" value={this.content} onChange={this.handleChange} ></input>
                <button type="button" className="btn btn-secondary" onClick={this.submitForm}>Leave Review</button>
            </form>
        )
    }
}