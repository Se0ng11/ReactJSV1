import React from 'react';
import '../../../styles/tabs.css';
import { 
    Tab,
    Row,
    Col,
    Nav,
    NavItem
 } from 'react-bootstrap';

// import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

export class Admin extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            tab: [
                {
                    name: "Overview",
                    icon: "tab-col tab-red",
                    content: "a"
                },
                {
                    name: "MIS",
                    icon: "tab-col tab-green",
                    content: "b"
                },
                {
                    name: "ACC",
                    icon: "tab-col tab-purple",
                    content: "c"
                },
                {
                    name: "HMR",
                    icon: "tab-col tab-blue",
                    content: "d"
                },
                {
                    name: "OEE",
                    icon: "tab-col tab-orange",
                    content: "e"
                },
                {
                    name: "SAL",
                    icon: "tab-col tab-yellow",
                    content: "f"
                },
            ],
            adminTab: localStorage.getItem("adminTab")
        }

    }

    HandleClick(data) {
        this.setState({ adminTab: data.name });
        localStorage.setItem("adminTab", data.name);
    }

    render(){
        return(
            <div>
                <h4>{this.props.location.pathname.slice(1)} Page</h4>
                <hr />
                <Tab.Container id="AdminTab">
                    <Row className="clearfix">
                        <Col sm={2}>
                        <Nav bsStyle="white" stacked>
                            {this.state.tab.map(data =>
                                <NavItem 
                                    key={data.name} 
                                    eventKey={data.name}
                                    title={data.name} 
                                    className={this.state.adminTab === data.name ? data.icon + " active": data.icon } 
                                    onClick={(e)=>this.HandleClick(data)}
                                >
                                    {data.name}
                                </NavItem>
                            )}
                        </Nav>
                        </Col>
                        <Col sm={10}>
                        <Tab.Content>
                            {this.state.tab.map(data=>
                                <Tab.Pane 
                                    key={data.name}
                                    eventKey={data.name}
                                    className={this.state.adminTab === data.name ? "active in": ""} 
                                >
                                    <p>{data.content}</p>
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }

}