import React, {Component} from 'react';
import List from './List'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import logo from './logo.svg';
import './App.css';

let generateID = 1;
class App extends Component {
  state = {
    lists: [
      {name: 'tom', age: 19, school: 'school1', id: 0},
      {name: 'tom1', age: 19, school: 'school2', id: 1},
      {name: 'tom2', age: 19, school: 'school3', id: 2},
    ],
    commentList: []
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0);
    generateID++;
    lists.push({name: 'tom2', age: 19, school: 'school3', id: generateID});
    this.setState({
      lists
    })
  }
  handleListDelete = (id) => {
    console.log('父组件收到id:'+ id );
    const lists = this.state.lists.slice(0);
    const index = lists.findIndex(list => list.id === id);
    lists.splice(index, 1);
    this.setState({
      lists
    })
  }
  handlePublish =() => {
    // push setState
  }
  render() {
    const {lists,commentList} = this.state;
    return (
      <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {/* 数组的循环 */}
        {lists.map((list, i) => {
          return (
            <List key={list.id} a={1} onDelete={this.handleListDelete}/>
          )
        })}
      </ul>
      <div>
        <CommentInput onPublish={this.handlePublish}/>
        <CommentList commentList={commentList}/>
      </div>
      </>
    )
  }
}


export default App;
