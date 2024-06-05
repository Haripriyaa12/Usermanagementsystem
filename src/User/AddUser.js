import React, { useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';


const AddUser = () => {



    const navigate = useNavigate();

    const initialState = { name: "", username: "", email: "", phone: "", website: "" }

    const [user, setUser] = useState(initialState)



    const { website } = user;

    //Object destructuring as u dont want user. everytime



    const onChangeInput = event => {


        setUser({
            ...user, [event.target.name]: event.target.value

        });

    }



    const onFormSubmit = async (event) => {

        event.preventDefault();

        await axios.post("http://localhost:3500/users",user)

            navigate({ pathname: '/' })

        




        

    }

    return (

        <div className="container">

            {/*  //container gives some padding */}

            <div className="w-75 mx-auto p-5 shadow-sm">

                <h2 className="text-center mb-4">Add User</h2>

                <form onSubmit={(event) => onFormSubmit(event)}>

                    <div className="form-group mb-2">

                        <input

                            type="text"

                            className="form-control form-control-lg"

                            placeholder="Enter name of user"

                            name="name"

                            value={user.name}

                            onChange={(event) => onChangeInput(event)}

                            required

                        />

                    </div>

                    <div className="form-group mb-2">

                        <input

                            type="text"

                            className="form-control form-control-lg"

                            placeholder="Enter the user name"

                            name="username"

                            value={user.username}

                            onChange={(event) => onChangeInput(event)}

                            required

                        />

                    </div>

                    <div className="form-group mb-2">

                        <input

                            type="email"

                            className="form-control form-control-lg"

                            placeholder="Enter your email"

                            name="email"

                            value={user.email}

                            onChange={(event) => onChangeInput(event)}

                            required

                        />

                    </div>

                    <div className="form-group mb-2">

                        <input

                            type="tel"

                            className="form-control form-control-lg"

                            placeholder="Enter your phone no"

                            name="phone"

                            value={user.phone}

                            onChange={(event) => onChangeInput(event)}

                            required

                        />

                    </div>

                    <div className="form-group mb-2">

                        <input

                            type="text"

                            className="form-control form-control-lg"

                            placeholder="Enter your website"

                            name="website"

                            value={website}

                            onChange={(event) => onChangeInput(event)}

                            required

                        />

                    </div>

                    <button type="submit" className="btn btn-info text-white mb-4 col-12">

                        Add User

                    </button>

                </form>

            </div>

        </div>

    )

}



export default AddUser