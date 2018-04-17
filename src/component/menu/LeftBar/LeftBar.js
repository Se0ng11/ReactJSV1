import React from 'react';
import './leftbar.css';
import '../../../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';
import { push as Menu } from 'react-burger-menu';
import { 
    SubAdmin
} from '../../page/SubList';

export class LeftBar extends React.Component {
    SwitchSubMenu(){
        let target = this.props.location.pathname.slice(1).toLowerCase();

        if(target === "admin"){
            return <SubAdmin />
        }
    }

    render(){
        return (
            <div>
                <Menu noOverlay pageWrapId={ "page-wrap" } >
                    {this.SwitchSubMenu()}
                </Menu>
            </div>
        );
        
    }

}