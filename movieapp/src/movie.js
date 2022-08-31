import { Component } from "react"
import './App.css'
import Review from "./review"
import Form from './reviewForm'

export default class Movie extends Component {
    render() {

        let commentOne ={
            name: "Max",
            content: "Great family cult classic"
        }

        let commentTwo ={
            name: "Sam",
            content: "It's your classic Disney Channel Original Movie"
        }

        let commentThree ={
            name: "Louise",
            content: "A bit too unbelievable for my taste."
        }
        return (
            <div id="movie-list" class="container">
                <br></br>
                <h1>Movie Reviews</h1> <br></br>
                <div className="row">
                    <div className="card col-sm-3 mx-auto">
                        <img className="card-img-top img-responsive" width="300 px" height="300 px" src="https://lumiere-a.akamaihd.net/v1/images/p_hocuspocus_19880_e000b013.jpeg" alt="Hocus Pocus"></img>
                        <div className="card-body">
                            <h5 className="card-title">Hocus Pocus</h5>
                            <p className="card-text">Synopsis Here</p>
                            <button className="btn btn-secondary" type="button">Like</button>
                            <button className="btn btn-secondary" type="button">Dislike</button>
                        </div>
                        <div id="reviewList" className="row">
                            <Review {...commentOne}/>
                            <Form/>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="card col-sm-3 mx-auto">
                        <img className="card-img-top img-responsive" width="300 px" height="300 px" src="https://m.media-amazon.com/images/M/MV5BOTAyYjQ3NjctNGMzNi00YThkLThmYzUtZDViYWZkMDA2YTMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjAwMjc0NjQ@._V1_.jpg" alt="Halloweentown"></img>
                        <div className="card-body">
                            <h5 className="card-title">Halloweentown</h5>
                            <p className="card-text">Synopsis Here</p>
                            <button className="btn btn-secondary" type="button">Like</button>
                            <button className="btn btn-secondary" type="button">Dislike</button>
                        </div>
                        <div id="reviewList" className="row">
                            <Review {...commentTwo}/>
                            <Form/>
                        </div>
                    </div>
                    
                    <div className="card col-sm-3 mx-auto">
                        <img className="card-img-top img-responsive" width="300 px" height="300 px" src="https://m.media-amazon.com/images/I/51RY8F-gxbL._AC_.jpg" alt="Halloweentown"></img>
                        <div className="card-body">
                            <h5 className="card-title">The Goonies</h5>
                            <p className="card-text">Synopsis Here</p>
                            <button className="btn btn-secondary" type="button">Like</button>
                            <button className="btn btn-secondary" type="button">Dislike</button>
                        </div>
                        <div id="reviewList" className="row">
                            <Review {...commentThree}/>
                            <Form/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}