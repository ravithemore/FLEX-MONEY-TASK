import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import months from './Months';
import Update from './Update';

const Member = (props) => {
    const { name, currBatch, email, paidMonth } = props.member;
    const [modalShow, setModalShow] = useState(false);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name !== null && name.firstName + " " + name.lastName}</Card.Title>
                <hr />
                <Card.Text>
                    <p>Batch : {currBatch}</p>
                    <p>Fee Status : {paidMonth === months[new Date().getMonth()] ? 'Paid' : 'Not Paid'}</p>
                    <p>Email : {email}</p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="info" onClick={() => { setModalShow(true) }} size='sm'>Update</Button>
                </div>
            </Card.Body>
            <Update
                member={props.member}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Card>
    )
}

export default Member