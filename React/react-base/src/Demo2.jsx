import React from 'react'

const sty = { backgroundColor: '#eee' }
function Demo2(props) {
  const { names, from } = props;
  return(
    <div style={sty}>
      {names};
      {from}
    </div>
  )
}
export default Demo2;