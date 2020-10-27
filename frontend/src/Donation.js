import React, { useState, useEffect } from 'react';
import {DataScroller} from 'primereact/datascroller';
import {Col, Row, Container} from 'react-bootstrap';
import './Donation.css';

const Donation = () => {
    

    const carTemplate = (car) => {

        return (
            <div className="car-details">
                
        <Container>
          <Row id="first">
            <Col>
                <div class="about-text">
                    <h2>{car.label}</h2>
                    <hr/>
                    <Row>
                        <b>Description : </b>
                        <p>{car.description}</p>
                    </Row>
                    <Row>
                        <b>RIB : &nbsp; </b>
                        <p>{car.rib}</p>
                    </Row>
                    <Row>
                        <b>Bank Name : &nbsp;</b>
                        <p>{car.bank}</p>
                    </Row>
                     </div>
            </Col>
            <Col xs={7}>
                <div class="about-media"> <img src={require('./img/don/'+car.num+'.jpg')} /></div>
              </Col>
        
          </Row>
          <hr style={{width:'50%',textAlign:'left',marginLeft:'0',}}/>
         </Container>
            </div>
        );
    };
    const cars = [
        {label: 'Special Fund for the Management and Response to COVID-19', description: 'King Mohammed VI ordered the COVID-19 fund’s creation on March 15, with an initial budget of $1 billion. The fund is intended to alleviate the impact of the coronavirus outbreak on the national economy and social sector, and to cover the costs of upgrading the medical infrastructure to appropriately treat COVID-19 patients. Cumulative donations from Moroccan companies, banks, and institutions into the Special Fund for the Management and Response to COVID-19 reached MAD 15 billion as of March 18.',rib:'001 810 00 780 002 011 062 02 21',bank:'Bank Al-Maghrib',num:'1',},
        {label: 'Association Marocaine des Villages d’Enfants SOS', description: 'Too many children grow up without families in Morocco. Every day, 24 children are abandoned and swell the ranks of orphanages. According to the Entraide Nationale, nearly 80,000 children grow up without families in child protection establishments in Morocco. The mission of SOS Children is to give a family to these children to make them grow and support them in building their future, especially during this Pandemic.',rib:'022 780 000 132 00 050329 73 74',bank:'Société Générale',num:'3',},
        {label: 'Fonds spécial pour la gestion du coronavirus', description: 'Le Groupement professionnel des banques du Maroc avait annoncé la mise à disposition par les banques, des guichets bancaires au profit des citoyens souhaitant faire des dons.Ce jeudi 25 mars, Attijariwafa bank a annoncé la mise à la disposition des citoyens, particuliers et entreprises, clients et non clients, un compte de collecte de dons pour leur permettre de verser leurs contributions, à travers son réseau physique ainsi que ses différents canaux digitaux.',rib:'007 780 0002001000119660 66',bank:'Attijariwafa bank',num:'2',},
           
    ];
    
    return (
        <div className="dataview-demo">
            <DataScroller value={cars} itemTemplate={carTemplate} rows={10} buffer={0.4} />
        </div>
    );
}
export default Donation;