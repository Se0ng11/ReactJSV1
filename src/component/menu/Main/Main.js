import React from 'react';
import { 
    Grid, 
    Row, 
    Col 
} from 'react-bootstrap';
import { 
    Route,
    Switch
 } from 'react-router-dom';
import { 
    Topbar, 
    LeftBar, 
    Bottombar 
} from '../MenuList';
import { 
    Home, 
    Finance, 
    Admin, 
    Resource, 
    Report 
} from '../../page/PageList';

export class Main extends React.Component {
    render(){
        let pageWithoutBar = [ Home ];
        let isLeftBarShow = true;
        let contentSize = 11;

        for(var i = 0; i<= pageWithoutBar.length - 1; i++)
        {
            if (pageWithoutBar[i].name.toLowerCase() === window.location.pathname.slice(1).toLowerCase()){
                isLeftBarShow = false;
                contentSize = 12;
                break;
            }
        }

        return(
            <div>
                <Topbar />
                <Grid fluid>
                    <Row>
                        {isLeftBarShow &&
                        <Col xs={1} md={1}>
                            <Route path="/" component={LeftBar} />
                        </Col>
                        }
                        <Col xs={contentSize} md={contentSize} id="page-wrap">
                            <Switch>
                                <Route path='/Home' component={Home} />
                                <Route path='/Finance' component={Finance} />
                                <Route path='/Admin' component={Admin} />
                                <Route path='/Resource' component={Resource} />
                                <Route path='/Report' component={Report} />
                            </Switch>
                        </Col>
                    </Row> 
                </Grid> 
                <Bottombar />
            </div>
        );
    }
}