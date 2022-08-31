import { Component } from "react"
import './App.css'
import Review from "./review.js"
import './reviewForm.js'

export default class Movie extends Component {
    render() {
        return (
            <div id="movie-list" class="container">
                <div className="card">
                    <img class="card-img-top" src="..." alt="Card cap"></img>
                    <div className="card-body">
                    <h5 className="card-title">Hocus Pocus</h5>
                    <p className="card-text">Synopsis Here</p>
                    </div>
                </div>
                <div id="reviewList" className="row">
                    <Review/>
                    <reviewForm/>
                </div>
            </div>
        )
    }
}