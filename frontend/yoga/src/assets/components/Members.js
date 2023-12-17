import React, { useEffect, useState } from 'react'
import Member from './Member'
import Container from 'react-bootstrap/Container';

const Members = () => {

    const [members, setMembers] = useState([]);

    // Fetch All Members API
    const fetchAllMembers = async () => {
        const response = await fetch('http://localhost:8080/api/v1/getallmembers', {
            method: "GET"
        })
        const json = await response.json();
        setMembers(json);
    }

    useEffect(() => {
        fetchAllMembers();
    }, [])


    return (
        <Container  >
            <h1 className='text-center pt-3'>Healthy Members of Yoga Academy</h1>
            <div className='row'>
                {members.map((member) => {
                    return <> <div className='col-md-4 my-3 w-40' key={member.id}>
                        <Member member={member} className="col-md-4" />
                    </div></>
                })}
            </div>
        </Container >
    )
}

export default Members