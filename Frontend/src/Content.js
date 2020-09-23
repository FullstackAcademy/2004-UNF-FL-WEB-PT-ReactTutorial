import React from 'react'
import { Route, Switch } from 'react-router-dom';

import ShowLinks from './areas/ShowLinks'
import CreateLinks from './areas/CreateLink'

function Content(props) {
  return <div className="content">
    <Switch>
      <Route path='/' exact component={ShowLinks}></Route>
      <Route path='/create' component={CreateLinks}></Route>
      <Route path='/' component={() => <div> 404 I Can't find it :( </div>} />
    </Switch>
  </div>

}

export default Content