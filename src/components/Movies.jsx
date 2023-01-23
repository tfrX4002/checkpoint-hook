import React, { Component } from 'react'

export default class Movies extends Component {



  deleteMovie = (id) => {
    this.props.deleteMovie(id)
  }


  render() {
    return (
        <div className='movie'>
          <div className='logo'>
           <img src="https://images-platform.99static.com//5fVeexjJRN_kWQ709H5m_3-LniY=/0x0:1024x1024/fit-in/590x590/projects-files/30/3049/304958/43fd7dbe-c8f4-4337-b066-934b7827039b.jpg" alt="" />
          </div>
          <div className='description'>
                <h4>{this.props.movies.name}</h4>

                <button onClick={() => this.deleteMovie(this.props.movies.id)}>Delete</button>
              </div>
        </div>
        
    )
  }
}
