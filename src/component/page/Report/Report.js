import React from 'react';

export class Report extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h4>{this.props.location.pathname.slice(1)} Page</h4>
                <hr />
            </div>
        )
    }

}