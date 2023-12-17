import React, { useState } from 'react';
import months from './Months'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
    const [member, setMember] = useState({
        name: {
            firstName: '',
            lastName: '',
        },
        email: '',
        dob: '',
        contactno: '',
        gender: '',
        city: '',
        currBatch: '',
        paidMonth: null
    })

    const getAge = (dateStr) => {
        const today = new Date()
        const dob = new Date(dateStr)
        let age = today.getFullYear() - dob.getFullYear()
        const n = today.getMonth() - dob.getMonth()
        if (n < 0 || (n === 0 && today.getDate() < dob.getDate())) {
            age--
        }
        return age
    }

    const [errors, setErrors] = useState({})

    const handleMember = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null })
    }
    const handleName = (e) => {
        setMember({ ...member, name: { ...member.name, [e.target.name]: e.target.value } })
        setErrors({ ...errors, [e.target.name]: null })
    }
    const handlePayment = () => {
        setMember({ ...member, paidMonth: months[new Date().getMonth()] })
    }

    const handleErrors = () => {
        const { name, email, dob, contactno, gender, city, currBatch } = member
        console.log("errors : " + errors)
        const newErrors = {}
        if (name.firstName.length < 2) {
            newErrors.firstName = "First name too short"
        }
        if (name.lastName.length < 2) {
            newErrors.lastName = "Last name too short"
        }
        if (email.length < 6) {
            newErrors.email = "Email invalid"
        }
        let age = 0;
        if (dob !== '')
            age = getAge(dob)
        if (dob === '') {
            newErrors.dob = "Please enter your Date of Birth"
        } else if (age < 18) {
            newErrors.dob = "You need to atleast 18yrs old"
        } else if (age > 65) {
            newErrors.dob = "You need to below 65yrs old"
        }
        if (contactno.length !== 10) {
            newErrors.contactno = "Please enter valid contact number"
        }
        if (city.length < 2) {
            newErrors.city = "Please enter valid city name"
        }
        if (!gender || gender === 'Choose gender') {
            newErrors.gender = "Please enter your gender"
        }
        if (!currBatch || currBatch === 'Select batch timings') {
            newErrors.currBatch = "Please select batch timings"
        }
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = handleErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            registerMember(member);
        }
    }

    // Register Member API
    const registerMember = async (member) => {
        const response = await fetch('http://localhost:8080/api/v1/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(member)
        })
        const json = await response.json();
        console(json)
    }

    return (
        <Container className='my-3 px-5 w-75' >
            <h1 className='pt-3'>Join us...</h1>
            <Form>
                <Row className='my-3'>
                    <Col>
                        <Form.Label >First Name</Form.Label>
                        <Form.Control placeholder="First name" value={member.name.firstName} isInvalid={errors.firstName} name='firstName' onChange={handleName} required />
                        <Form.Control.Feedback type='invalid'>{errors.firstName}</Form.Control.Feedback>
                    </Col>
                    <Col><Form.Label >Last Name</Form.Label>
                        <Form.Control placeholder="Last name" value={member.name.lastName} isInvalid={errors.lastName} name='lastName' onChange={handleName} required />
                        <Form.Control.Feedback type='invalid'>{errors.lastName}</Form.Control.Feedback>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >Email</Form.Label>
                        <Form.Control type='email' value={member.email} placeholder="Email" isInvalid={errors.email} name='email' onChange={handleMember} required />
                        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                    </Col>
                    <Col><Form.Label >Contact No</Form.Label>
                        <Form.Control type='number' value={member.contactno} placeholder="Contact No" isInvalid={errors.contactno} name='contactno' onChange={handleMember} required />
                        <Form.Control.Feedback type='invalid'>{errors.contactno}</Form.Control.Feedback>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >Date of Birth</Form.Label>
                        <Form.Control type='date' value={member.dob} placeholder="Date of Birth" isInvalid={errors.dob} name='dob' onChange={handleMember} required />
                        <Form.Control.Feedback type='invalid'>{errors.dob}</Form.Control.Feedback>
                    </Col>
                    <Col><Form.Label >Gender</Form.Label>
                        <Form.Select name='gender' value={member.gender} isInvalid={errors.gender} onChange={handleMember} required >
                            <option>Choose gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to say</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>{errors.gender}</Form.Control.Feedback>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >City</Form.Label>
                        <Form.Control name='city' value={member.city} placeholder="City" isInvalid={errors.city} onChange={handleMember} />
                        <Form.Control.Feedback type='invalid'>{errors.city}</Form.Control.Feedback>
                    </Col>
                    <Col><Form.Label >Batch</Form.Label>
                        <Form.Select name='currBatch' value={member.currBatch} isInvalid={errors.currBatch} onChange={handleMember} required>
                            <option>Select batch timings</option>
                            <option>6-7AM</option>
                            <option>7-8AM</option>
                            <option>8-9AM</option>
                            <option>5-6PM</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>{errors.currBatch}</Form.Control.Feedback>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='my-3' variant={member.paidMonth ? "success" : "danger"} onClick={handlePayment} >
                            {member.paidMonth ? 'Fees Paid' : 'Pay Fees : 500'}
                        </Button>
                    </Col>
                    <Col>
                        <Button className='my-3' variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Register;