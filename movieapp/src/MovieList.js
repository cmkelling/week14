import React, {Component} from "react";
import './App.css'
import Movie from './movie.js'

export default class MovieList extends Component {
    render () {
        return (
            <div className="container">
                <Movie/>
            </div>
        )
    }
}

