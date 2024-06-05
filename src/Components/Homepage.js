import React, { useEffect, useState } from "react";

import axios from "axios";

import { Button, Table } from "react-bootstrap";

import { Link } from "react-router-dom";



const Homepage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => { 


        getAllUsersWithAwaits();

    }, []);



    const getAllUsersWithAwaits = async () => {

        const result = await axios.get("http://localhost:3500/users");

            console.log(result.data);

        setUsers(result.data.reverse());

        console.log("After axios call");

    };


    const deleteUser = async (userId) => {

        await axios.delete(`http://localhost:3500/users/${userId}`);

        getAllUsersWithAwaits();



    }

    return (

        <div className="margin-auto">

            <h2 className="py-3">User Management System</h2>

            <Table className="table-users" striped bordered hover shadow variant="dark">

                <thead>

                    <tr>

                        <th>#</th>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Phone Number</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user, index) => {

                        return <tr key={index}>

                            <td>{index + 1}</td>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.phone}</td>

                            <td>

                                <Link to={`/users/view/${user.id}`} className="btn btn-info me-2">View</Link>

                                <Link to={`/users/edit/${user.id}`} className="btn btn-outline-info me-2">Edit</Link>

                                <Button onClick={() => deleteUser(user.id)} variant="danger">Delete</Button>

                            </td>

                        </tr>

                    })

                    }


                </tbody>

            </Table>

        </div>

    );

};



export default Homepage;