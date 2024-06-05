import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'

import { ListGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'



const ViewUser = () => {



    const { userId } = useParams();

    const initialState = { name: "", username: "", email: "", phone: "", website: "" }

    const [user, setUser] = useState(initialState)



    //usestate for complexobjects street & city inside address

    const [address, setAddress] = useState({})

    const [company, setCompany] = useState({})



    useEffect(() => {

        FetchUser();

    }, [])



    const FetchUser = async (event) => {

        const response = await axios.get(`http://localhost:3500/users/${userId}`);

        /* console.log(response); */

        setUser(response.data)

        setAddress(response.data.address)

        setCompany(response.data.company)



    }



    return (

        <div className="container">

            <Link to='/' className="btn btn-outline-info mt-2 text-black">Back</Link>

            <p className="display-2">User ID : {user.id}</p>

            <ListGroup variant="flush" className="p-2 w-75">

                <ListGroup.Item>Full Name: {user.name}</ListGroup.Item>

                <ListGroup.Item>Username: {user.username}</ListGroup.Item>

                <ListGroup.Item>Email: {user.email}</ListGroup.Item>

                <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>

                <ListGroup.Item>Website: {user.website}</ListGroup.Item>

                <ListGroup.Item>Address: {address.street} | {address.city}</ListGroup.Item>

                <ListGroup.Item>Company Name: {company.name}</ListGroup.Item>



            </ListGroup>

        </div>

    );

}



export default ViewUser