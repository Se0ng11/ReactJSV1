import React, { Component } from 'react';
import { 
    Navbar,
    Nav,
    Button
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Finance, 
  Admin, 
  Resource, 
  Report 
} from '../../page/PageList';

export class Topbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pages : [
        {
          page: Home.name,
          icon: "fa fa-home"
        },
        {
          page: Finance.name,
          icon: "fa fa-usd"
        },
        {
          page: Admin.name,
          icon: "fa fa-lock"
        },
        {
          page: Resource.name,
          icon: "fa fa-user"
        },
        {
          page: Report.name,
          icon: "fa fa-file-text"
        },
      ],
      topBar: localStorage.getItem("topBar")
    }

  }

  OnClick(data) {
    this.setState({ topBar: data });
    localStorage.setItem("topBar", data);
  }

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
              {
                this.state.pages.map(data => 
                    <li 
                      key={data.page} 
                      className={this.state.topBar === data.page ? "active": "" } 
                      onClick={()=>this.OnClick(data.page)}>
                        <Link to={"/" + data.page}>
                          <i className={data.icon} aria-hidden="true"></i> {data.page}
                        </Link>
                    </li>
                 )
              }
            </Nav>
          <Navbar.Form pullRight>
            <Button type="button" bsStyle="danger"><i className="fa fa-lg fa-sign-out"></i> Sign out</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}
    