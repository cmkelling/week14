import React, { Component } from 'react'
import './App.css';
import './MovieList'
import MovieList from './MovieList';
import './reviewForm.js'

export default class movieApp extends Component {
    render () {
        return (
            <div className='container'>
                <MovieList/>
                <Form/>
            </div>
        )
    }
}