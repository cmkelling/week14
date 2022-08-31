import React, {Component} from "react";
import './App.css'

export default class Form extends Component {
    render() {
        return (
            <div className="form">
                <label>Review</label>
                <input type="text" placeholder="Your Movie Review"></input>
                <button type="button" className="btn btn-secondary">Done</button>
            </div>
        )
    }
}