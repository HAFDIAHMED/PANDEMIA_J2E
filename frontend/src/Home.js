import React from 'react';
import './Home.css';
import { Container, Image, AccordionCollapse} from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col,Card,CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import { Link} from'react-router-dom';
import { Accordion, AccordionTab } from 'primereact/accordion';
import {Button} from 'primereact/button';

function Home() {
  return (

      <div class="Home">
            <div class="intro">
                <Image src={require('./img/1.png')} className="header-image" />
            </div>


    

    <div id="about">
        <Container>
          <Row id="first">
            <Col>
                <div class="about-text">
                    <h2>WHAT IS <span>COVID-19 ?</span></h2>
                    <hr/>
                    <p>Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 .</p>
                    <p>It was first identified in December 2019 in Wuhan, China, and has since spread globally, resulting in an ongoing pandemic.</p>
                    <p> Of 17 May 2020, more than 4.63 million cases have been reported across 188 countries and territories, resulting in more than 311,000 deaths. More than 1.69 million people have recovered.</p>
                    <Accordion >
              
                    <AccordionTab header="More Information" >
                    The virus is primarily spread between people during close contact,
                    most often via small droplets produced by coughing,
                    sneezing, and talking.
                    The droplets usually fall to the ground or onto surfaces rather than travelling through air over long distances.
                    However, research as of June 2020 has shown that speech-generated droplets may remain airborne for tens of minutes.
                    Less commonly, people may become infected by touching a contaminated surface and then touching their face.
                    It is most contagious during the first three days after the onset of symptoms, although spread is possible before symptoms appear, and from people who do not show symptoms.

                        
                    </AccordionTab>
                </Accordion>
                     </div>
            </Col>
            <Col xs={8}>
                <div class="about-media"> <img src={require('./img/home1.jpg')} /></div>
              </Col>
        
          </Row>
         </Container>
         </div>
            
         

          <div class="container2">
            <Container>
           <Row>
             <Col xs={7} >
             <img src={require('./img/Analytics.jpg')} />
             </Col>
             <div class="vl"></div>
             <Col  id="yes">
             <h1>Statistics</h1>
             <p>Keep yourself posted with the different statistics and graphs related to the cases in your area and city. Check out the situation in our country</p>
             <Link to="/login"> 
             <button class="btn">All the recent statistics</button>
             </Link>
             </Col>
           </Row>
        </Container>

          </div>
            
          <div id="about">
            <Container>
          <Row id="is">
            <Col xs={8}>
                <div class="about-media"> <img src={require('./img/cough.jpg')} /></div>
              </Col>
              <Col>
                <div class="about-text">
                    <h2>What are the common <span>Symptoms ?</span></h2>
                    <hr/>
                    <p>Fever is the most common symptom, other common symptoms include cough, loss of appetite, fatigue, shortness of breath, sputum production, and muscle and joint pains.</p>
                    <Accordion >
                    <AccordionTab header="More Information" >
                    Most common symptoms:
                    <ul>
                      <li>fever</li>
                      <li>dry cough</li>
                      <li>tiredness</li>
                    </ul>
                    Less common symptoms:
                    <ul>
                      <li>aches and pain</li>
                      <li>sore throat</li>
                      <li>diarrhoea</li>
                      <li>conjunctivitis</li>
                      <li>headache</li>
                      <li>loss of taste and smell</li>
                      <li>a rash on skin, or discolouration of fingers or toes</li>
                    </ul>
                    Serious symptoms:
                    <ul>
                      <li>difficulty breathing or shortness of breath</li>
                      <li>chest pain or pressure</li>
                      <li>loss of speech or movement</li>
                    </ul>
                    <p style={{ fontWeight: 'bold',}}>
                    Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.
                    People with mild symptoms who are otherwise healthy should manage their symptoms at home.
                    On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
                   </p>
                    </AccordionTab>
          </Accordion>
                    
                     </div>
            </Col>
          </Row>
          </Container>
          </div>

          
          <div id="about">
            <Container>
          <Row id="first">
            <Col>
                <div class="about-text">
                <h2>What about  &nbsp; <span>Prevention ?</span></h2>
                        <hr/>
                        <p>Preventive measures to reduce the chances of infection include staying at home, avoiding crowded places, keeping distance from others, washing hands with soap and water often and for at least 20 seconds, practising good respiratory hygiene, and avoiding touching the eyes, nose, or mouth with unwashed hands.</p> 
                        <Accordion >
              
                        <AccordionTab header="More Information" >
                        To prevent the spread of COVID-19:
                        <ul>
                        <li>Clean your hands often. </li>
                        <li>Use soap and water, or an alcohol-based hand rub.</li>
                        <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
                        <li>Don’t touch your eyes, nose or mouth. </li>
                        <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze. </li>
                        <li>Stay home if you feel unwell.</li>
                        <li>If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.</li>
                        <li>Follow the directions of your local health authority.</li>
                        <li>Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.</li>
                        </ul>
                        
                        </AccordionTab>
          </Accordion>
                    </div>
            </Col>
            <Col xs={8}>
                <div class="about-media"> <img src={require('./img/fight.jpg')} /></div>
              </Col>
        
          </Row>

        </Container>
      </div>

      
<div id="services">
  
<Container>
  <div id="ourser"> 
<h1 >Our Services</h1>
<hr/>
<h3>These are the services we provide</h3>
</div>
  <Row>
    
    <Col><div class="service-media"> <img src={require('./img/banch1.jpg')} /> </div>
        <div class="service-desc">
          <h3>Essentials</h3>
          <p>Check-out the nearest convinience stores or pharmacies in your area, and look for all the available items to protect your safety and the safety of your family.</p>
          <Link to="/login"><Button label="Essentials" className="p-button-rounded p-button-secondary" />{' '}</Link>
        </div>
        
        </Col>
    <Col><div class="service-media"> <img src={require('./img/08.jpg')} /> </div>
        <div class="service-desc">
          <h3>Statistics</h3>
          <p>Keep yourself posted with the different statistics and graphs related to the cases in your area and city. Check out the situation in our country</p>
          <Link ><Button label="Statistics" className="p-button-rounded p-button-secondary" />{' '}</Link>
        </div></Col>
    <Col><div class="service-media"> <img src={require('./img/hand.jpg')} /> </div>
        <div class="service-desc">
          <h3>Donate</h3>
          <p>Want to lend a helping hand ? This crisis is affecting all of us especially those in need, this is the time to show the solidarity we are capable of.</p>
          <Link to="/donation"><Button label="Donate" className="p-button-rounded p-button-secondary" />{' '}</Link>
        </div></Col>
  </Row>
</Container>
  
</div>


<div id="contact" class="text-center">
  <div class="container">
    <div class="section-title text-center">
      <h2>Contact Us</h2>
      <hr/>
      <p>Give us your feedback, we appreciate it !</p>
    </div>
    <div id="pli" class="col-md-8 col-md-offset-2">
      <h3>Leave us a message</h3>
      <form name="sentMessage" id="contactForm" novalidate>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" id="name" class="form-control" placeholder="Name" required="required"/>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="email" id="email" class="form-control" placeholder="Email" required="required"/>
              <p class="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea name="message" id="message" class="form-control" rows="4" placeholder="Message" required></textarea>
          <p class="help-block text-danger"></p>
        </div>
        <div id="success"></div>
        
        <Button type="submit"  label="Send Message" className="p-button-rounded btn btn-custom btn-lg" style={{ display: 'inline-block', padding: '15px 32px',}}/>
      </form>
    </div>
  </div>
</div>
<div id="footer">
  <div class="container text-center">
    <div class="col-md-8 col-md-offset-2">
      <div class="social">
        <ul>
          <li><SocialIcon id="sc" url="http://twitter.com/" /></li>
          <li><SocialIcon id="sc" url="http://facebook.com/" /></li>
          <li><SocialIcon id="sc" url="http://github.com/" /></li>
        </ul>
      </div>
      
    </div>
  </div>
</div>

      </div>

  );
}

export default Home;
