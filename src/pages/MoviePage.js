import React, { Component } from 'react'
import Login from "../components/login";
import data from '../data/movies-data'
import MovieCardContainer from '../components/Movie-card-container'
import NameSearch from '../components/nameSearch'
import RatingFilter from '../components/rating-filter'
import AddModal from '../components/Modal'



export default class MoviePage extends Component {
    state={
        data,
        rating:0,
        movieName:"",
        
        
    }
         getInput = (input) =>{
            this.setState({
                movieName: input
            })
        }
        getRating =(inputRating) =>{
            this.setState ({
                rating: inputRating
            })
        }
        addParent =(name,url,star) =>{
            this.setState({
                data:[...this.state.data, {name:name, img:url, star: star}]
            })
        }
        render() {
        const searchInput = this.state.data.filter(movie =>
            movie.star >= this.state.rating &&
             movie.name.toLowerCase().includes(this.state.movieName.toLocaleLowerCase())
            
            )


            return (
            
            <div>
                
                <Login path="/Login"  component= {Login} />
                <NameSearch search={this.getInput} />
                <RatingFilter count={this.state.rating} change={this.getRating}/>
                <MovieCardContainer movies={searchInput} />
                <AddModal add={this.addParent} />
                
                
                
               
            </div>
            )
    }
}