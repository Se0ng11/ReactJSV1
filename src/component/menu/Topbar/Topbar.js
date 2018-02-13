import React, { Component } from 'react';
import { 
    Navbar,
    Nav,
    Button
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Topbar extends Component {

  render(){
      return (
            <Navbar fluid collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/Home">Hartalega</Link>
                </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                    <li><Link to="/Home"><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                    <li><Link to="/Finance"><i className="fa fa-usd" aria-hidden="true"></i> Finance</Link></li>
                    <li><Link to="/Admin"><i className="fa fa-lock" aria-hidden="true"></i> Admin</Link></li>
                    <li><Link to="/Resource"><i className="fa fa-user" aria-hidden="true"></i> Resource</Link></li>
                    <li><Link to="/Report"><i className="fa fa-file-text" aria-hidden="true"></i> Report</Link></li>
                  </Nav>
                <Navbar.Form pullRight>
                  <Button type="button" bsStyle="danger"><i className="fa fa-lg fa-sign-out"></i> Sign out</Button>
                </Navbar.Form>
              </Navbar.Collapse>
            </Navbar>
      );
  };
}
    