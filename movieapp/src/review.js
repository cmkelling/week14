import { Component } from "react"
import './App.css'

export default class Review extends Component {
    constructor(props){
        super(props);
        this.name = props.name;
        this.content = props.content;
    }
    handleClick() {
        console.log(`You clicked the entry for (${this.props.id})`);
    }
    render() {
        return (
            <div id="review-list" className="container" onClick={this.handleClick}>
                <div className="card mx-auto">
                    <div className="card-header">
                        {this.name}
                    </div>
                    <div className="card-body">
                        {this.content}
                    </div>
                </div>
            </div>
        )
    }
}