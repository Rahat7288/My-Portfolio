import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../about/about.css';
const About = () => {
    return ( 
        <div className='About'>
            <Container>
            <h1>About Myself</h1>
            <hr/>

            <Row>
                <Col>
                <div className='About_text'></div>
                </Col>
                <Col>
                <div className='About_con'>
                    <div className='About_border'></div>
                </div>
                </Col>
            </Row>

        </Container>
        </div>
     );
}
 
export default About;