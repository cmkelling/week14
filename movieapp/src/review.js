import { Component } from "react"
import './App.css'

export default class Review extends Component {
    render() {
        return (
            <div id="review-list" className="container">
                <div className="card mx-auto">
                    <div className="card-header">
                        {this.props.name}
                    </div>
                    <div className="card-body">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}