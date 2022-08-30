import { Component } from "react"
import './App.css'
import './reviewList'
import ReviewList from "./reviewList"

export default class Movie extends Component {
    render() {
        return (
            <div id="movies">
                <div className="row">

                </div>
                <div id="reviewList" className="row">
                    <ReviewList/>
                </div>

            </div>
        )
    }
}