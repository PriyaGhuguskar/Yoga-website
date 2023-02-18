import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import lilyimg from '../assets/lily.png'
import doeimg from '../assets/doe.png'
import Slot from './Slot'
import Filter from './Filter'


const HeadCompo = () => {
    return (
        <>
            <div className='head-container'>

                <div className='head-text'>
                    <h1>Explore life with Yoga</h1>
                    <h2>Learn Yoga with Us </h2>
                    <a
                        href=''
                        className="btn btn-primary btn-sm"
                        style={{ margin: "0 5px" }}
                    >
                        Book Your Slot Now
                    </a>

                </div>


            </div>


            {/* Trainer container */}

            <Container className='trainer-div'>
                <h1>OUR TRAINERS</h1>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={lilyimg} />
                            <Card.Body>
                                <Card.Title>Lily</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Know more </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src={doeimg} style={{ height: '190px' }} />
                            <Card.Body>
                                <Card.Title>Jonny Doe</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Know more </Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>



            {/* Sesson section */}
            <div className='session-div'>
                <Filter />
            <Slot />
            </div>
        </>
    )
}

export default HeadCompo