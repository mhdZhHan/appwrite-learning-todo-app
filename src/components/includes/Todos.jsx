import React, { useEffect, useState } from 'react'

import { databases } from '../../configs/appwrite'

function Todos() {
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)

    const getTodos = () => {
        setLoader(true)

        const promise = databases.listDocuments(
            '6452898c7bc71101e464', // db_id
            '64528997e5125d4dc82a' // collection_id
        )

        promise.then(
            (response) =>{
                console.log(response.documents) 
                setTodos(response.documents)
            },
            (error) => {
                console.log(error)
            })

        setLoader(false)
    }

    const deleteTodo = (id) => {
        console.log(id)
        const promise = databases.deleteDocument(
            '6452898c7bc71101e464', // db_id
            '64528997e5125d4dc82a', // collection_id
            id // the todod item id
        )

        promise.then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(()=> {
        getTodos()
    }, [[], deleteTodo])

    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-xl font-bold mb-2">Todo List</p>
            {loader ? (
                <p>Loading ...</p>
            ) : (
                <div>
                    {todos &&
                        todos.map((item) => (
                            <div key={item.$id}>
                                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                                    <div>
                                        <p>{item.todo}</p>
                                    </div>
                                    <div>
                                        <span 
                                            className="text-red-400 cursor-pointer"
                                            onClick={() => deleteTodo(item.$id)}
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default Todos