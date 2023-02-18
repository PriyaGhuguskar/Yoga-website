import React from 'react'
// import lilyimg from '../assets/lily.png'
// import doeimg from '../assets/doe.png'
import { Form} from 'react-bootstrap'


const Filter = () => {
    // const photos = [

    //     {
    //         "id": "0",
    //         "trainer": "Lily",
    //         "sevices": "Yoga class",
    //         "level": "Beginner",
    //         "price": 1000,
    //         "url": { lilyimg },
    //     },
    //     {
    //         "id": "1",
    //         "trainer": "Lily",
    //         "sevices": "Yoga class",
    //         "level": "Advance",
    //         "price": 1300,
    //         "url": { lilyimg },
    //     },

    //     {
    //         "id": "2",
    //         "trainer": "Jonny doe",
    //         "sevices": "Yoga class",
    //         "level": "Beginner",
    //         "price": 1100,
    //         "url": { doeimg },
    //     },
    //     {
    //         "id": "3",
    //         "trainer": "Jonny doe",
    //         "sevices": "Yoga class",
    //         "level": "Advance",
    //         "url": { doeimg },
    //     },

    //     {
    //         "id": "4",
    //         "trainer": "Lily",
    //         "sevices": "1-1 session",
    //         "level": "Beginner",
    //         "price": 2500,
    //         "url": { lilyimg },
    //     },
    //     {
    //         "id": "5",
    //         "trainer": "Lily",
    //         "sevices": "1-1 session",
    //         "level": "Advance",
    //         "price": 3000,
    //         "url": { lilyimg },
    //     },

    //     {
    //         "id": "6",
    //         "trainer": "Jonny doe",
    //         "sevices": "1-1 session",
    //         "level": "Beginner",
    //         "price": 2600,
    //         "url": { doeimg },
    //     },
    //     {
    //         "id": "7",
    //         "trainer": "Jonny doe",
    //         "sevices": "1-1 session",
    //         "level": "Advance",
    //         "price": 3100,
    //         "url": "../",
    //     },
    // ]
   
    
    return (
        <>
        <div className='filter-div'>
            <h4>Filter</h4>
            {/* trainer*/}
            <div className='trainer-filter-div' >
                <Form id='ageToCheck'>
                    <h5>Trainer</h5>
                    <div>
                        <Form.Check
                            inline
                            label="lily"
                            name="trainer"
                            type='radio'
                            value="lily"

                        />
                        <Form.Check
                            inline
                            label="Jonny doe"
                            name="trainer"
                            type='radio'
                            value="Jonny doe"
                        />
                    </div>
                </Form>
            </div>

            {/* services*/}
            <div className='service-div' >
                <Form>
                    <h5>Service</h5>
                    <div>
                        <Form.Check
                            inline
                            label="classes"
                            name="services"
                            type='radio'
                            value="class"
                        />
                        <Form.Check
                            inline
                            label="1-1 Session"
                            name="services"
                            type='radio'
                            value="appointments"
                        />
                    </div>
                </Form>
            </div>

            {/* level*/}
            <div className='level-div' >
                <Form>
                    <h5>Level</h5>
                    <div>
                        <Form.Check
                            inline
                            label="beginner"
                            name="level"
                            type='radio'
                            value="beginner"
                        />
                        <Form.Check
                            inline
                            label="advance"
                            name="level"
                            type='radio'
                            value="advance"
                        />
                    </div>
                </Form>
            </div>

        </div>
      
</>
    )
}

export default Filter