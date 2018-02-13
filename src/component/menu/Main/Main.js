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
        return(
            <div>
                <Topbar />
                <div>
                    <Grid fluid>
                        <Row>
                            <Col md={1}>
                                <LeftBar />
                            </Col>
                            <Col md={11} className="content">
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
                </div>
                <Bottombar />
            </div>
        );
    }
}