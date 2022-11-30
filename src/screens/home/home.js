import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return ( 
        <div className='Home'>

            <Container>

                <Row className="justify-content-md-center">
                    <Col className='intro'>
                        <div className='intro_con'>
                            <h3>Hi, am</h3>
                            <h1>Rahat Islam Akash</h1>
                            <h2>Software Engineer</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>


                        </div>
                    </Col>
                    <Col className='socia'>
                        <div className='socia_con'>

                        </div>
                    </Col>
                </Row>

            </Container>
            
        </div>
     );
}
 
export default Home;