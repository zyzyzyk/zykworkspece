import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main.jsx';
import Single from './components/Single.jsx';
import {BrowserRouter, Route} from 'react-router-dom'

const Root = function() {
  return (
    <BrowserRouter>
      <Route path='/' component={Main} />
      <Route path='/search/:searchTerm' component={Main} />
      <Route path='/beer/:beerId/:beerSlug' component={Single} />
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));