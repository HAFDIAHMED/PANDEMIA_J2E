import React from 'react';
import './Help.css';
import { Link} from'react-router-dom';
import { DataScroller } from 'primereact/datascroller';
import  { Component } from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionTab} from 'primereact/accordion';
import { Image} from 'react-bootstrap';


import classNames from 'classnames';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Col, Row, Container} from 'react-bootstrap';

import ReactDOM from 'react-dom';

import  {useState} from 'react';
import {ListBox} from 'primereact/listbox';

const Help = () => { 
    const [selectedCar, setSelectedCar] = useState('Pandemia');

    const carTemplate = (option) => {
        

        return (
            
            <div className="p-clearfix">
            <Row>
                <Col><i className={option.icon} style={{'fontSize': '3em'}}></i></Col>
                <Col><Accordion >
                    <AccordionTab header={option.icon,option.label} style={{color:'#FFFF'}} >
                       <p style={{fontSize:'1.4em'}}> {option.description}</p>
                    </AccordionTab>
                </Accordion></Col>
            
            
            </Row>
             
        
            </div>
          
        );
    }

    

    const cars = [
        {label: 'Pandemia', value: 'Pandemia',icon:'pi pi-home',
        description:'Pandemia is a platform designed to help you through this pandemic. We offer you all the services you need : General Information about the current Pandemic, Recent statistics. All the essentials next to your house including pharmaceutical products. The donations you can make to help your community survive this economical downturn.'
    
    },
        {label: 'Updates', value: 'Updates',icon:'pi pi-chart-line',
        description:'The Updates section of our website provides you with all the recent statistic covid-19 related. The pandemic situation in our country is evolving day by day, keep up with the latest development with an array of charts and statistics to help you understand the situation.'
    },
        {label: 'Essentials', value: 'Essentials',icon:'pi pi-shopping-cart',
        description:'The Essentials section of our website makes it possible for our users to check out the essentials they need in the stores, supermarkets and pharmacies next to your house. You can also check out the available materials in your shopping list for a more efficient social distancing.'
    },
        {label: 'Donation', value: 'Donation',icon:'pi pi-dollar',
        description:'The Donation section in our websites presents the different funds you can contribute to. It\'s a well known fact that many people and buisnesses suuffer from the repurcussions of the spread of the covid-19 pandemic.You can help underprivileged people, suffering buisnesses stand on their feet once again with a small contribution using the RIB code in the descriptive section.   ' 
    },
        
       
    ];

    return (
        <div class="helpme">
            
            <Container>
           <Row>
             <Col xs={4} >
             <Image src={require('./img/help.jpg')} className="header-image" />
             </Col>
             <div class="vl"></div>
             <Col  id="yes">
             <h1>Confused ? We're here to help !</h1>
             <hr />
             <p>You're lost to the ins and outs of our website ? <br/>
             The bar bellow will explain each component in our website and clear up your confusion.
                If you have any more questions, details, suggestions you can message our inbox and let us know. 

             </p>

             </Col>
           </Row>
        </Container>

            <ListBox value={selectedCar} filter={true}  options={cars} onChange={(e) => setSelectedCar(e.value)} itemTemplate={carTemplate}
                            style={{width: '100%', height:'100%'}} listStyle={{height:'100%'}}  />
        </div>
    );


}       
export default Help;