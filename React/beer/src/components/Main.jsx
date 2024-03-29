import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
// import Results from './Results'
import Results from './Results'

export default class Main extends React.Component  {
  constructor () {
    super();
    this.state = {
      beers: [],
      loading: true
    }
  }

  componentDidMount () {
    const params = this.props.match.params || {}; // /   /search/:searchTerm
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
  }

  loadBeers (searchTerm="hops") {
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
    })
  }

  render () {
    
    return (
      <div className="wrapper">
        <Header siteName="Beer me!"/>
        <Search/>
        <Results beers={this.state.beers} loading={this.state.loading}/>
      </div>
    )
  }
}