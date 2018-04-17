import React from 'react';
import ReactDataGrid from 'react-data-grid';

export class Finance extends React.Component {
    constructor(props){
        super(props);
        this.createRows();
        this._columns = [
          { key: 'id', name: 'ID', resizable: true },
          { key: 'title', name: 'Title', resizable: true },
          { key: 'count', name: 'Count', resizable: true } ];
    
        this.state = null;

    }


    createRows = () => {
        let rows = [];
        for (let i = 1; i <= 50; i++) {
          rows.push({
            id: i,
            title: 'Title ' + i,
            count: i
          });
        }
    
        this._rows = rows;
      };
    
      rowGetter = (i) => {
        return this._rows[i];
      };
    render(){
        return(
            <div>
                <h4>{this.props.location.pathname.slice(1)} Page</h4>
                <hr />
                <ReactDataGrid
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this._rows.length}
                    minHeight={600} />
            </div>
        )
    }

}