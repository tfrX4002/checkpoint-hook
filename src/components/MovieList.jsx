import React, { Component } from 'react'
import Movies from './Movies';

export default class MovieList extends Component {
  render() {
    return (
      <div className='movieList'>
       {this.props.movies.map(movies => <Movies key={movies.id} movies = {movies} deleteMovie={this.props.deleteMovie} /> ) }
      </div>
    )
  }
}
