import React, { Component } from 'react';
import {connect} from 'react-redux'
// import logo from './logo.svg';
import './App.css';

class Count extends Component {
  state = {  }
  handleIn = ( ) => {
    // store.dispatch({ type: 'INCREMENT' })
    this.props.increment();
  }
  handleDe = () => {
    // store.dispatch({ type: 'DECREMENT' })
    this.props.decrement();
  }
  handleAddFilm = () => {
    // store.dispatch(
    //   {
    //     type: 'ADD_FILM',  
    //     film: {name: '蜘蛛侠'}
    //   })
    this.props.add_film();
  }
  render() { 
    console.log(this.props);
    const { count, films } = this.props
    return ( 
      <div>
        count: {count}
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          films.map((film, i) => {
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    films: state.films
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    foo: () => {console.log('aaa')},
    increment: () => {dispatch({type: 'INCREMENT'})},
    decrement: () => {dispatch({type: 'DECREMENT'})},
    add_film: () =>{
      dispatch({
        type: 'ADD_FILM',
        film: {name: '蜘蛛侠'}
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);