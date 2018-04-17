import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import '../../../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';

export class SubAdmin extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div>
                <Accordion accordion={false}>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Function</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul className="nav flex-column">
                                <li className="nav-item"><i className="fa fa-fw fa-users" aria-hidden="true"></i> Group</li>
                                <li className="nav-item"><i className="fa fa-fw fa-file-text-o" aria-hidden="true"></i> File</li>
                                <li className="nav-item"><i className="fa fa-fw fa-arrows-h" aria-hidden="true"></i> Line(Same level)</li>
                                <li className="nav-item"><i className="fa fa-fw fa-arrows-v" aria-hidden="true"></i> Line(Diff level)</li>
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Resources</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>
                                Body content
                            </p>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Applications</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>
                                Body content
                            </p>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
            </div>
        );
        
    }

}