import React from 'react';
import { connect } from 'react-redux';
import App from './component/app'
// import logo from './logo.svg';
import './App.css';


// mapStateToProps
const a = (state) => {
  // 过滤一下
  return {
    commentList: state
  }
}
// mapDispatchToProps
const b = (dispatch) => {
  return {
    addComment: (userName, content) => {
      dispatch({
        type: 'ADD_COMMENT',
        userName,
        content
      })
    }
  }
}
export default App;