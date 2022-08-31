import { Component } from "react"
import './App.css'
import ReviewList from "./reviewList"
import './reviewForm'

export default class Movie extends Component {
    render() {
        return (
            <div id="movies">
                <div className="card">
                    <img class="card-img-top" src="..." alt="Card cap"></img>
                    <div className="card-body">
                    <h5 className="card-title">Hocus Pocus</h5>
                    <p className="card-text">Synopsis Here</p>
                    </div>
                </div>
                <div id="reviewList" className="row">
                    <ReviewList/>
                    <reviewForm/>
                </div>
            </div>
        )
    }
}