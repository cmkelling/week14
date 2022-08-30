import React, {Component} from "react";
import './App.css'
import Review from './review.js'


export default class ReviewList extends Component {
    render () {
        return (
            <div className="container">
                <Review/>
            </div>
        )
    }
}