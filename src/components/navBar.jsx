import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../styles/navBar.css';

import AboutMe from '../components/index'
import Background from '../components/background'
import Projects from './projects'
import Contact from '../components/contact'


export default class navBar extends Component {
    render() {
        return (
            <Router>
                <Menu {...this.props}>
                    <Link className="menu-item" to="/">About me</Link>
                    <Link className="menu-item" to="/background">Background</Link>
                    <Link className="menu-item" to="/project">Projects</Link>
                    <Link className="menu-item" to="/contact-me">Contact me</Link>
                </Menu>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/contact-me">
                        <Contact />
                    </Route>
                    <Route path="/project">
                        <Projects />
                    </Route>
                    <Route path="/background">
                        <Background />
                    </Route>
                    <Route path="/">
                        <AboutMe />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
