import React, { Component } from 'react';
class CommentInput extends Component {
  state = {  }
  handlePublish = () => {
    const userName = this.refs.userName.value;
    const commentContent = this.refs.commentContent.value;
    console.log({userName , commentContent})
  }
  render() { 
    return ( 
      <div>
        用户名： <input type="text" />
        评论内容: <textarea ref="commentContent" id="" cols="3" name="" ></textarea>
        <button onClick={this.handlePublish}></button>
      </div>
     );
  }
}
 
export default CommentInput;