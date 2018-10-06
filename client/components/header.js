import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div class="col-lg-3">
    <h1>&nbsp;</h1>
    <div class="list-group">
      <Link to='/app/list'  class="list-group-item" class="list-group-item">User List</Link>
      <Link to='/app/create' class="list-group-item">Create New User</Link>
    </div>
  </div>
)

export default Header
