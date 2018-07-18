import React from 'react'
import { Route, Link } from 'react-router-dom'

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>
        {label}
      </Link>
    )}
  />
)
export default ActiveLink
