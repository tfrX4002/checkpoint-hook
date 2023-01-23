
import React, { Component } from 'react';

export default class NavBar extends Component {


  state = {
    name : ""
  }

  seizure(e){
    this.setState({name : e.target.value})
  }
 addFilm= () =>{
    this.props.addMovie({id : Date.now(),name : this.state.name}) 
 }


 render(){
    return (
        <div className='nav-bar'>
          <div className='form'>
           <input type="text" onChange={this.seizure.bind(this)}/>
           <button onClick={this.addFilm.bind(this)}>Add</button>
          </div>
       </div>
    );
 }
}

