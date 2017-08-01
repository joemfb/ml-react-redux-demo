import React from 'react';
import { Route } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './home'
import About from './about'
import Search from './search'

import './app.css'

const App = () => (
  <div className="App container">
    <header className="bg-primary">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>React-Redux-ML Demo</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/" exact={true}>
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/search">
            <NavItem eventKey={1}>Search</NavItem>
          </LinkContainer>
          <LinkContainer to="/about-us">
            <NavItem eventKey={1}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
