import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import lilyimg from '../assets/lily.png'
import doeimg from '../assets/doe.png'
import logo from '../assets/logo.png'


const Slot = () => {
    const photos = [

        {
            "id": "0",
            "trainer": "Lily",
            "sevices": "Yoga class",
            "level": "Beginner",
            "price": 1000,
            "url": { lilyimg },
        },
        {
            "id": "1",
            "trainer": "Lily",
            "sevices": "Yoga class",
            "level": "Advance",
            "price": 1300,
            "url": { lilyimg },
        },

        {
            "id": "2",
            "trainer": "Jonny doe",
            "sevices": "Yoga class",
            "level": "Beginner",
            "price": 1100,
            "url": { doeimg },
        },
        {
            "id": "3",
            "trainer": "Jonny doe",
            "sevices": "Yoga class",
            "level": "Advance",
            "url": { doeimg },
        },

        {
            "id": "4",
            "trainer": "Lily",
            "sevices": "1-1 session",
            "level": "Beginner",
            "price": 2500,
            "url": { lilyimg },
        },
        {
            "id": "5",
            "trainer": "Lily",
            "sevices": "1-1 session",
            "level": "Advance",
            "price": 3000,
            "url": { lilyimg },
        },

        {
            "id": "6",
            "trainer": "Jonny doe",
            "sevices": "1-1 session",
            "level": "Beginner",
            "price": 2600,
            "url": {doeimg},
        },
        {
            "id": "7",
            "trainer": "Jonny doe",
            "sevices": "1-1 session",
            "level": "Advance",
            "price": 3100,
            "url": "../",
        },
    ]
    return (
        <>
            
                <Container className='session-con'>
                    <Row>

                        {photos.map((photo) => (
                            <Col md={3} className="mt-2 mb-2" key={photo.id}>
                                <Card style={{ width: "16rem", textAlign: "center" }}>
                                    <Card.Img
                                        variant="top"
                                        src={logo}
                                        style={{ height: "150px" }}
                                    />
                                    <Card.Title> Price : {photo.price}</Card.Title>
                                    <Card.Title>{photo.sevices} with {photo.trainer}
                                        
                                    </Card.Title>

                                    <Card.Body>
                                        <Card.Text></Card.Text>
                                        <Card.Text><b>Level :{photo.level}</b></Card.Text>
                                        <Link
                                            to='/schedule'
                                            className="btn btn-success "
                                            style={{ margin: "0 5px" }}
                                        >
                                            Book
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))}
                    </Row>

                </Container>
            
        </>
    )
}

export default Slot
