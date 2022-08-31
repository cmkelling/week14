import { Component } from "react"
import './App.css'
import ReviewList from "./reviewList"
import './reviewForm'

export default class Movie extends Component {
    render() {
        return (
            <div id="movies">
                <div className="row">

                </div>
                <div id="reviewList" className="row">
                    <ReviewList/>
                    <reviewForm/>
                </div>

            </div>
        )
    }
}