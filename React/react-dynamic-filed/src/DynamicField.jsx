import React, { Component } from 'react';

let generateId = 0
class DynamicField extends Component {
  state = { 
    data: [
      {
        name: 'name',
        age: '1',
        id: '0'
      }
    ]
   }
   handleValueChange = (key, value, id) => {
    //  不可变数据
     let data = this.state.data.slice(0);
     let index = data.findIndex((item) => item.id === id);
     data[index][key] = value;
     this.setState({
       data
     })
   }
  render() { 
    const {data} = this.state;
    return ( 
      <>
        {
          data.map((filedData, i) => {
            return (
              <Filed key={filedData.id} 
              filedData={filedData} 
              onFieldDelete={this.handleDelete} 
              onFiledValueChange={this.handleValueChange}/>
            )
          })
        }
        <br/>
        <button>添加</button>
        <br/>
        <button>提交</button>
      </>
     );
  }
}
class Filed extends Component {
  state = {  }
  handleFliedChangeName = (e) => {
    const name = e.target.value;
    const id = parseInt(e.target.dataset.id)
    const {onFiledValueChange} = this.props;
    onFiledValueChange('name', name, id);
  };
  handleFliedChangeAge = (e) => {
    const age = e.target.value;
    const id = parseInt(e.target.dataset.id)
    const {onFiledValueChange} = this.props;
    onFiledValueChange('age', age, id);
  }
  handleDelete = (e) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data.slice(index, 1)
    this.setState({
      data
    })
    const id = parseInt(e.target.dataset.id);
    const {onFieldDelete} = this.props;
    onFieldDelete()
  }
  render() { 
    const {filedData} = this.props;
    const { name, age } = filedData;
    return ( 
      <div>
        姓名: <input type="text" value={name} 
        data-id={filedData.id}
        onChange={this.handleFliedChangeName}/>
        年龄: <input type="number" value={age} 
        data-id={filedData.id}
        onChange={this.handleFliedChangeAge}/>
        <button data-id={filedData.id} onClick={this.handleDelete}>删除</button>
      </div>
     );
  }
}

export default DynamicField;