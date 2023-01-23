import './App.css';
import NavBar from './components/NavBar';
import React ,{ Component } from 'react';
import MovieList from './components/MovieList';

class App extends Component {

  state = {
    movies:[{id : 1, name : "Flash"},{id : 2 ,name : "Avengers"}]

    
  }
  addMovie = (movie) => 
   {

    let newMovies =[...this.state.movies]

    newMovies.push(movie);

    this.setState({ movies : newMovies })
 }
  deleteMovie = (id) => {
    
    let newMovies =[...this.state.movies]
    let index = newMovies.findIndex((movie)=> movie.id === id)

    newMovies.splice(index, 1)

    this.setState({movies : newMovies})
  }
render(){
  return(
  <div className='body'>
    <div className='App container'>
       <NavBar addMovie={this.addMovie}/>
        <MovieList movies={this.state.movies} deleteMovie={this.deleteMovie}/>
           </div>
         </div>
      
    )
  }



}

export default App;
