import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/accordion';


class Reasons extends Component {
    state={
        list:[{id:1,listItem:"We have started operations in the overseas market as well."},
        {id:2,listItem:"we have trained more than 2 lac+ students."},
        {id:3,listItem:"To maintain a qualitative services."},
        {id:4,listItem:"CAD DESK’s trainers are certified under CCTP."}
    ],
    icon:true
    }
    render() {
        return (
            <div>
            <div className="content-section implementation">
        
                <Accordion>
                <AccordionTab  header="Top 6 Reasons to Choose &#8595;">
                    <div>
                    <p className="text-left"><strong>Quality Education: </strong>CAD DESK &nbsp;is a leading training network of india in the field of CAD/CAM/CAE.</p>
                    <p className="text-left"><strong>Placement: </strong>For better Placement CAD DESK's.</p>
                    <p className="text-left"><strong>Assistance: </strong>CAD DESK, provides assistance and trainning on how to crack interviews and be job ready.</p>
                    <p className="text-left"><strong>Network:&nbsp;</strong>our network has grown to more than 150+ cities in 22 states of India.</p>
                    <ul className="text-left">
                        {this.state.list.map(list=><li key={list.id}>{list.listItem}<br/></li>)}
                    </ul>
                    <p className="text-left"><strong>Focus:&nbsp;</strong>CAD DESK focuses on student and works on development of his/her knowledge and skills.</p>
                    <p className="text-left"><strong>Experience:&nbsp;</strong>Having 20 years vast experience in training.<br /></p>
                </div>
                
                    </AccordionTab>
                </Accordion>
            </div>
            
            
            </div>
        );
    }
}

export default Reasons;

