import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import ConcurrentModeDemo from './concurrent/index'
import Index from './lifeCycle-react15/index'
// hooks function组件的增强

function App() {
  const [parentCount, setParentCount] = useState(0)
  return (
   <div>
     {/* <ConcurrentModeDemo /> */}
     <button onClick={() => {
       setParentCount(parentCount + 1)
     }}>setParentCount</button>
     <Index parentCount={parentCount}/>
   </div> 
  )
}

export default App;
