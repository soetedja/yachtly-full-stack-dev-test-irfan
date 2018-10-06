import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserList from "../containers/userList";
import UserCreate from "../containers/userForm";

const Main = () => (
  <div class="col-lg-9">
    <Switch>
      <Route exact path='/app' component={UserList}/>
      <Route path='/app/add' component={UserCreate}/>
    </Switch>
  </div>
)

export default Main
