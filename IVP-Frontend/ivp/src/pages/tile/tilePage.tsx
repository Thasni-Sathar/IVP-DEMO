import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import SideBar from '../../components/sideBar/sideBar';

import './tile.css';

function Tile() {
    return (
        <>
            
              <SideBar/>
              <Container>
                <Row style={{marginLeft:"60px"}}>
                  <Col md={4} style={{marginTop:"100px"}}>
                        <Card style={{ marginTop: 20, backgroundColor: "#F9F0F0" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body >
                                <Card.Text className='cardTextAbout'>
                                    Experion Technologies is a 14+ year old IT solutions & services company with a focus on digital technologies. With over 300 customers across 32 countries, Experion uses the power of Mobile, Web, Analytics, Cloud, and Digital technologies to unlock the potential of businesses across verticals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}  style={{marginTop:"100px"}}>
                        <Card style={{ marginTop: 15, backgroundColor: "#F9F0F0" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body >
                                <Card.Text className='cardTextAbout'>
                                    EM-Urgency provides monitoring and handling all events, announcements & holidays occurring throughout the IT services and systems of the Experion Technologies. All the alerts are notified via email. They can respond to the email by clicking on the link provided and share their responses.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}  style={{marginTop:"100px"}} >
                        <Card style={{ marginTop: 15, backgroundColor: "#F9F0F0" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body >
                                <Card.Text className='cardTextAbout'>
                                    We focus on serving the Enterprise, ISV, and Startup segments across the Retail, Transportation, Healthcare, Financial services domains. Headquartered in Trivandrum, India. We have offices around the globe including the United States, United Kingdom, Switzerland,  Australia etc...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
          
            <br></br>
        </>
    );
}

export default Tile;