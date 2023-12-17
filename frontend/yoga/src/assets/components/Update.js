import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import months from './Months';

const Update = (props) => {
    const { id, name, email, currBatch, nextBatch, paidMonth } = props.member
    const [mem, setMem] = useState({
        email: email,
        batch: nextBatch || currBatch
    })
    const [feeStatus, setFeeStatus] = useState(paidMonth === months[new Date().getMonth()])
    const [monthPaid, setMonthPaid] = useState(paidMonth)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onHide();
        if (mem.batch !== nextBatch) {
            shiftBatch()
        }
    }
    const handlePayment = () => {
        setFeeStatus(!feeStatus)
        setMonthPaid(months[new Date().getMonth()])
        makePayment()
    }

    const handleChange = (e) => {
        setMem({ ...mem, [e.target.name]: e.target.value })
    }

    // Make Payment API
    const makePayment = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/makepayment/${id}`, {
            method: "POST"
        })
        const json = await response.json();
        alert(json)
    }

    // Shift Batch API
    const shiftBatch = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/shiftbatch/?id=${id}&next=${mem.batch}`, {
            method: "PUT",
        })
        const json = await response.json()
        console.log(json)

    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextBalance">
                        <Form.Label column sm="4">
                            Name
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" plaintext readOnly value={name !== null && name.firstName + ' ' + name.lastName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPin">
                        <Form.Label column sm="4">
                            Fees paid for
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type='text' plaintext readOnly value={monthPaid || "Not Paid"} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Email
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" name="email" value={mem.email} onChange={handleChange} />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Next month's batch
                        </Form.Label>
                        <Col sm="8">
                            <Form.Select name="batch" value={mem.batch} onChange={handleChange}>
                                <option>6-7AM</option>
                                <option>7-8AM</option>
                                <option>8-9AM</option>
                                <option>5-6PM</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" disabled={feeStatus} onClick={handlePayment}>{feeStatus ? "Fees Paid" : "Pay Fees"}</Button>
                <Button onClick={handleSubmit}>Update</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Update