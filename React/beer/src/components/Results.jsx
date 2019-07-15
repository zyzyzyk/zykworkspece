import React from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'

export default class Results extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired
  }
  state = {  }
  render() { 
    if(this.props.loading) {
      return <Loader message="加载中..."/>
    }
    return (
      <div></div>
    );
  }
}
 
// export default Results;