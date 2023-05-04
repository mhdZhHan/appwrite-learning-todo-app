import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// appwrite config
import { account } from '../../configs/appwrite'

// includes
import { TodoForm, Todos } from '../includes'

function Profile() {
    const [userDetails, setUserDetails] = useState()

    const navigate = useNavigate()

    useEffect(()=> {
        const getData = account.get()
        getData.then(
            (response)=> {
                setUserDetails(response)
                console.log(response)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [])

    const handleLogout = async () => {
        try {
            await account.deleteSession('current')
            navigate('/')
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            {userDetails ? (
                <>
                    <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
                        <div>
                            <p className="text-xl">Hello, {userDetails.name}</p>
                        </div>
                        <div>
                            <button 
                                className="bg-red-400 text-white p-1 rounded-md"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    {/* TODO_FORM */}
                    <TodoForm />

                    {/* TODOS_LIST */}
                    <Todos />
                </>
            ) : (
                <p className="mt-4">
                    Please Login To see Profile{" "}
                    <Link to="/">
                        <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
                            Login
                        </span>
                    </Link>
                </p>
            )}
        </Fragment>
    );
}

export default Profile
